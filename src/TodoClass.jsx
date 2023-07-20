import React from 'react';
import './App.css';
import AddTask from './AddTask.jsx'



class TODO extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: ["Fetch groceries", "Clean the kitchen", "Buy new chair", "Wash the car"],
      selected : null,
    };
  }

 

  handleAddTask = (task) => {
    const updatedTasks = [...this.state.tasks, task];
    this.setState({ tasks: updatedTasks });
  };

  setRadio = (event) => {
    this.setState({selected : event.target.value })

  }

  render() {
    return (
      <div>
        <h1 className='todo'>To Do :</h1>
        {this.state.tasks.map((task, index) => (
          <div className='tasks' key={index}>
            <label className='radiolabel'>
              <input
                className='radioclass'
                type="radio"
                name="option"
                value={index}
                checked={this.state.selected === String(index)}
                onChange={this.setRadio}
              />
              {task}
            </label>
            <br /> 
          </div>
        ))}
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}

export default TODO;
