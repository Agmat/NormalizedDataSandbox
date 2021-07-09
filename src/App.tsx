import './App.css';

import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllTodos } from './app/reducers/todosReducer/todosReducer';
import AddTodo from './components/AddTodo/AddTodo';
import TodosList from './components/TodosList/TodosList';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <div className="App">
      <Typography variant="h1">RANDOM TODOS</Typography>
      <TodosList />
      <AddTodo />
    </div>
  );
};

export default App;
