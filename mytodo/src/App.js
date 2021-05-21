import React, { useEffect, useState } from 'react';
import List from './List.jsx';

const useFetch = () => {

  const [loading, setLoading] = useState(false);
  
  const fetchInitialData = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:8080/todo');
    const initialData =  await res.json();
    setTodos(initialData);
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);  
}

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <>
      <h1>Todo App</h1>
      <form>
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>Add Todo</button>   
      </form>
      <List todos={todos} loading={loading} />
    </>
  );
}

export default App;