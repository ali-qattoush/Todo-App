import React from 'react';
import './App.css';
import AddTask from './AddTask.jsx';
import { v4 as uuidv4 } from 'uuid';

class TODO extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        tasks: [
          { id: uuidv4(), text: "Fetch groceries" },
          { id: uuidv4(), text: "Clean the kitchen" },
          { id: uuidv4(), text: "Buy new chair" },
          { id: uuidv4(), text: "Wash the car" },
        ],
        doneTasks: [],
      }
    };
  }

  handleAddTask = (task) => {
    const newTask = { id: uuidv4(), text: task };
    console.log("test")
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        tasks: [...prevState.data.tasks, newTask],
      },
    }));
  };

  
  DeleteTask = (id) => {
    this.setState((prevState) => {
      const { tasks, doneTasks } = prevState.data;
      const updatedTasks = tasks.filter((item) => item.id !== id);
      const updatedDoneTasks = doneTasks.filter((task) => task.id !== id);
      return {
        data: {
          tasks: updatedTasks,
          doneTasks: updatedDoneTasks,
        },
      };
    });
  };

  CheckboxChange = (id, isDoneTask) => {
    this.setState((prevState) => {
      const updatedData = { ...prevState.data };
      const task = updatedData.tasks.find((task) => task.id === id) || updatedData.doneTasks.find((task) => task.id === id);
    

      if (isDoneTask) {
        updatedData.doneTasks = updatedData.doneTasks.filter((task) => task.id !== id);
        updatedData.tasks = [...updatedData.tasks, task];
      } else {
        updatedData.tasks = updatedData.tasks.filter((task) => task.id !== id);
        updatedData.doneTasks = [...updatedData.doneTasks, task];
      }

      return { data: updatedData };
    });
  };

  render() {
    const { tasks, doneTasks } = this.state.data;

    return (
      <div className='container'>
        <div className='todoContainer'>
        <h1 className='todo'>To Do :</h1>
        {tasks.map((task) => (
          <div className='tasks' key={task.id}>
            <label className='checkboxlabel'>
              <input
                className='checkboxclass'
                type='checkbox'
                value={task.id}
                checked={false}
                onChange={() => this.CheckboxChange(task.id, false)}
              />
              <span className="checkbox-text">{task.text}</span>
            </label>
            <button className='deleteButton' onClick={() => this.DeleteTask(task.id)}>
              <i className="fas fa-trash"></i>

             
            </button>
          </div>
        ))}
        </div>
        <div className='doneContainer'>
          <h1 className='todo'>Done :</h1>
  
          {doneTasks.map((task) => (
            <div className='doneTasks' key={task.id}>
              <label className='checkboxlabel'>
                <input
                  className='checkboxclass'
                  type='checkbox'
                  value={task.id}
                  checked={true}
                  onChange={() => this.CheckboxChange(task.id, true)}
                />
                <span className="checkbox-text">{task.text}</span>
                
              </label>
              <button className='deleteButton' onClick={() => this.DeleteTask(task.id)}>
                <i className="fas fa-trash"></i>
              
              </button>
            </div>
          ))}
        </div>
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }

  

}

export default TODO;
