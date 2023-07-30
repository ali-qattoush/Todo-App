import React from 'react';
import './App.css';


class AddTask extends React.Component {
    constructor() {
      super();
      this.state = {
        task: '',
      };
    }
    
  
  
    handleChange = (event) => {
      this.setState({ task: event.target.value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log("thisss")
      if (this.state.task === '') {
        alert("Empty submission not allowed")
      } else {
        // eslint-disable-next-line react/prop-types
        this.props.handleAddTask(this.state.task); 
        this.setState({ task: '' });
      }

    };
  
    render() {
      return (
        <div className='addtask'>
          <form className='addtaskelements'>
            <button className='submitbutton' onClick={this.handleSubmit}>+</button>
            <input className='inputbar' type="text" placeholder="Add Task" value={this.state.task} onChange={this.handleChange} />
          </form>
        </div>
      );
    }
}

export default AddTask;