import React from 'react';
import './App.css';
import AddTask from './AddTask.jsx'



class TODO extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: ["Fetch groceries", "Clean the kitchen", "Buy new chair", "Wash the car"],
    };
  }

  handleAddTask = (task) => {
    const updatedTasks = [...this.state.tasks, task];
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div>
        <h1>To Do:</h1>
        <ul id="tasks">
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}

export default TODO;
