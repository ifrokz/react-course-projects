// stateless functional component.


class IndecisionApp extends React.Component {
    constructor (props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount(){ // Se llama solo cuando se monta un elemento.
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState( () => ({ options: options}));
            }
        }catch (e) {
            // Do nothing at all.
        }
    }
    componentDidUpdate(prevProps, prevState){ // Se llama cada vez que se actualiza el elemento.
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){ // Se llama antes de que el elemento de desmonte (por ejemplo al cambiar de pagina y volver a a renderizarla)
        console.log ('componentWillUnmount!');
    }

    handleDeleteOption ( optionToRemove ) {
        this.setState( (prevState) => ({
            options: prevState.options.filter((option) => ( optionToRemove !== option ))
        }));
    }

    handleDeleteOptions(){
        this.setState( () => ({options: []}) );
    }

    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[random])
    }

    handleAddOption (option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option already exists'
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option) }) );

    }

    render (){
        const subtitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header />
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) =>  {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        </div>
    );   
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
}



class AddOption extends React.Component {
    constructor (props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error }) );
            
        if(!error){
            e.target.elements.option.value = null;
        }
    }

    render (){ 
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age:  {props.age}</p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));