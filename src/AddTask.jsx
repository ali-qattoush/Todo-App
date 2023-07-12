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
      this.props.handleAddTask(this.state.task); 
      this.setState({ task: '' });
    };
  
    render() {
      return (
        <div>
          <form>
            <input type="text" value={this.state.task} onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    }
}

export default AddTask;