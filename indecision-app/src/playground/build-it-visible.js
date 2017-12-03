class VisibilityToggle extends React.Component {
    constructor (props){
        super(props);
        this.handleDetails = this.handleDetails.bind(this);
        this.state = {
            visible: false
        };
    }

    handleDetails(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleDetails}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible &&
                    <p>Hey. There are some details you can now see!</p>
                }
            </div>
        )
    }
}

ReactDOM.render (<VisibilityToggle/>, document.getElementById('app'));

// const buttonMostrar = () => {
//     mostrandoTexto = !mostrandoTexto;
//     renderApp();
// }

// let mostrandoTexto = false;

// const renderApp = () => {    
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={buttonMostrar}>{mostrandoTexto ? 'Hide details' : 'Show details'}</button>
//             {mostrandoTexto && (
//                 <div>
//                     <p>Algo de texto de ejemplo</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template , document.getElementById("app"));
// };

// renderApp();