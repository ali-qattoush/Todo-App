import { useState } from 'react';
import './App.css';
import AddTask from './AddTask.jsx';
import { v4 as uuidv4 } from 'uuid';

function TODO() {
  const [data, setData] = useState({
    tasks: [
      { id: uuidv4(), text: "Fetch groceries" },
      { id: uuidv4(), text: "Clean the kitchen" },
      { id: uuidv4(), text: "Buy new chair" },
      { id: uuidv4(), text: "Wash the car" },
    ],
    doneTasks: [],
  });

  const handleAddTask = (task) => {
    const newTask = { id: uuidv4(), text: task };
    setData((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, newTask],
    }));
  };

  const DeleteTask = (id) => {
    setData((prevState) => {
      const { tasks, doneTasks } = prevState;
      const updatedTasks = tasks.filter((item) => item.id !== id);
      const updatedDoneTasks = doneTasks.filter((task) => task.id !== id);
      return {
        tasks: updatedTasks,
        doneTasks: updatedDoneTasks,
      };
    });
  };

  const CheckboxChange = (id, isDoneTask) => {
    setData((prevState) => {
      const updatedData = { ...prevState };
      const task = updatedData.tasks.find((task) => task.id === id) || updatedData.doneTasks.find((task) => task.id === id);

      if (isDoneTask) {
        updatedData.doneTasks = updatedData.doneTasks.filter((task) => task.id !== id);
        updatedData.tasks = [...updatedData.tasks, task];
      } else {
        updatedData.tasks = updatedData.tasks.filter((task) => task.id !== id);
        updatedData.doneTasks = [...updatedData.doneTasks, task];
      }

      return updatedData;
    });
  };

  const { tasks, doneTasks } = data;

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
                onChange={() => CheckboxChange(task.id, false)}
              />
              <span className="checkbox-text">{task.text}</span>
            </label>
            <button className='deleteButton' onClick={() => DeleteTask(task.id)}>
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
                onChange={() => CheckboxChange(task.id, true)}
              />
              <span className="checkbox-text">{task.text}</span>
            </label>
            <button className='deleteButton' onClick={() => DeleteTask(task.id)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      <AddTask handleAddTask={handleAddTask} />
    </div>
  );
}

export default TODO;
