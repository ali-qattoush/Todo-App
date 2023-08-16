import './App.css';
import { useState } from 'react';

function AddTask( handleAddTask ) {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') {
      alert("Empty submission not allowed");
    } else {
      handleAddTask(task);
      setTask('');
    }
  };

  return (
    <div className='addtask'>
      <form className='addtaskelements'>
        <button className='submitbutton' onClick={handleSubmit}>+</button>
        <input className='inputbar' type="text" placeholder="Add Task" value={task} onChange={handleChange} />
      </form>
    </div>
  );
}

export default AddTask;
