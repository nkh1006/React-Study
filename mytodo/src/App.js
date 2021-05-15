import React, { Component, useEffect, useState } from 'react';
import './App.css';
import List from './List.jsx';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  useEffect(() => {
    console.log('every event');
  });

  useEffect(() => {
    console.log('newTodo event');
  }, [todos]);  

  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <form acton="">
        <input type="text" nmae="" onChange={changeInputData} />
        <button onClick={addTodo}>Add Todo</button>
      </form>

      <List todos={todos} />
    </React.Fragment>
  );
}

export default App;