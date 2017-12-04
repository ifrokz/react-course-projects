import React from 'react';

import OptionModal from './OptionModal';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
    }
    
    state = {
        options: [],
        selectedOption: undefined
    }
    handleClearSelectedOption = () => {
        this.setState( () => ({
            selectedOption: undefined
        }));
    }

    handleDeleteOption = ( optionToRemove ) => {
        this.setState( (prevState) => ({
            options: prevState.options.filter((option) => ( optionToRemove !== option ))
        }));
    };

    handleDeleteOptions = () => {
        this.setState( () => ({options: []}) );
    };

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState ( () => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option already exists'
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option) }) );

    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

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



    render (){
        const subtitle = 'Put your life in the hands of a computer.';
        console.log('hi');
        return (
            <div>
                <Header />
                <div className='container'>
                    <Action 
                        hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className = 'widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                        <OptionModal 
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption={this.handleClearSelectedOption}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default IndecisionApp;