import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class TaskManager extends React.Component {
    state = {
        tasks: [],
        selectedOption: undefined
    }
    handleRemoveAll = () => {
        this.setState(() => ({ tasks: [] }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.tasks.length);
        const option = this.state.tasks[randomNum]
        this.setState(() => ({ selectedOption: option }));
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Please enter valid text to add option'
        } else if(this.state.tasks.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ 
            tasks: prevState.tasks.concat([option]) 
        }));
    }
    handleRemove = (optionToRemove) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => optionToRemove !== task)
        }));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const tasks = JSON.parse(json);

            if(tasks) {
                this.setState(() => ({ tasks }));
            }

        } catch(e) {
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.tasks.length !== this.state.tasks.length) {
            const json = JSON.stringify(this.state.tasks)
            localStorage.setItem('options', json)
        }
    }
    
    render() {
        const subtitle = 'Manage your life with Task Manager.'

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    handleRemoveAll={this.handleRemoveAll} 
                    disable={this.state.tasks.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    tasks={this.state.tasks}
                    handleRemove={this.handleRemove}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}; 
