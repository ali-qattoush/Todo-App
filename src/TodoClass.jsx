import React from 'react';
import './App.css';
import AddTask from './AddTask.jsx'



class TODO extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: ["Fetch groceries", "Clean the kitchen", "Buy new chair", "Wash the car"],
      doneTasks : [],
      selectedTasks: [],
      selectedDoneTasks: []
    };
  }

 

  handleAddTask = (task) => {
    const updatedTasks = [...this.state.tasks, task];
    this.setState({ tasks: updatedTasks });
  };

  addDoneTask = (index) => {
    let doneTask = this.state.tasks[index]
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((item) => item !== doneTask),
      doneTasks: [...prevState.doneTasks, doneTask]
    }))

  }

  removeDoneTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      doneTasks: prevState.doneTasks.filter((item) =>  item !== task)

    }))

  }
  
  addSelectedRadio = (selectedIndex, isDoneTask) => {
    if (isDoneTask) {
      if (!this.state.selectedDoneTasks.includes(selectedIndex)) {
        const addCheckbox = [...this.state.selectedDoneTasks, selectedIndex];
        this.setState({ selectedDoneTasks: addCheckbox });
      } else {
        const removeCheckbox = this.state.selectedDoneTasks.filter(index => index !== selectedIndex);
        this.setState({ selectedDoneTasks: removeCheckbox });
      }
    } else {
      if (!this.state.selectedTasks.includes(selectedIndex)) {
        const addCheckbox = [...this.state.selectedTasks, selectedIndex];
        this.setState({ selectedTasks: addCheckbox });
      } else {
        const removeCheckbox = this.state.selectedTasks.filter(index => index !== selectedIndex);
        this.setState({ selectedTasks: removeCheckbox });
      }
    }
  };
  
  

  deleteTask = () => {
    this.setState((prevState) => {
      const { tasks, doneTasks, selectedTasks, selectedDoneTasks } = prevState;
  
      const updatedTasks = tasks.filter((item, index) => !selectedTasks.includes(index));
      const updatedDoneTasks = doneTasks.filter((item, index) => !selectedDoneTasks.includes(index));
  
      return {
        tasks: updatedTasks,
        doneTasks: updatedDoneTasks,
        selectedTasks: [], 
        selectedDoneTasks: []
      };
    });
  };
  
  


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
               
                
                onClick={() => this.addDoneTask(index)}
              />
              
              {task}
            </label>
            <input type="checkbox" checked={this.state.selectedTasks.includes(index)} onChange={() => this.addSelectedRadio(index, false)} />

        

          </div>
        ))}
        <div>
          <h1>Done :</h1>
          {this.state.doneTasks.map((task, index) => (
          <div className='doneTasks' key={index}>
            <label>
              <input
                className='radioclass'
                type="radio"
                name="option"
                value={index}
                checked={this.state.doneTasks.includes(task)}
               
                
                onClick={() => this.removeDoneTask(task)}
              />
              {console.log(this.state.doneTasks.includes(task))}
              
              {task}
            </label>
            <input type="checkbox" checked={this.state.selectedDoneTasks.includes(index)} onChange={() => this.addSelectedRadio(index, true)} />
            

          </div>
        ))}
         
        </div>
        <button className='deleteButton' onClick={this.deleteTask}>Delete</button>
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}



export default TODO;
