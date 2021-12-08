import React, { useState } from 'react';
import './App.css';

function App() {
  // store the input for the task
  // store the input for the dueDate
  // store the todo list array
  // [{ task: , dueDate: }]

  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [todoList, setTodoList] = useState([]);

  // onChange handlers
  const changeText = (e) => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDueDate(e.target.value);
    }
    // console.log(e.target.name);
  };
  // onSubmit handler
  const submitTask = (e) => {
    e.preventDefault();
    // create the task object
    // push it to the array
    const newTask = { task, dueDate };
    setTodoList([...todoList, newTask]);
    // console.log('clicked');
  };

  const removeTask = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    const newList = [];
    todoList.forEach((task) => {
      if (task.task !== e.target.name) {
        newList.push(task);
      }
    });
    setTodoList(newList);
  };

  return (
    // inputs for task and dueDate
    // a button to submit
    <div className='App'>
      <div className='Input Form'>
        <form onSubmit={submitTask}>
          <label>
            Task:{' '}
            <input type='text' name='task' value={task} onChange={changeText} />
          </label>
          <label>
            Due Date:{' '}
            <input
              type='text'
              name='dueDate'
              value={dueDate}
              onChange={changeText}
            />
          </label>
          <input type='submit' value='Add Task' />
        </form>
      </div>
      <div className='List'>
        <h1> To-do List</h1>
        <ul>
          {todoList.map((item) => (
            <li key={item.task}>
              {item.task}: {item.dueDate}
              <button name={item.task} onClick={removeTask}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
