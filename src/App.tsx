import './App.css';

import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './app/reducers/rootReducer';
import { fetchAllTodos, todosSelectors } from './app/reducers/todosReducer/todosReducer';
import AddTodo from './components/AddTodo/AddTodo';
import TodosList from './components/TodosList/TodosList';
const App = () => {
  const dispatch = useDispatch();
  const totalTodos = useSelector(
    (state: RootState) => todosSelectors.selectTotal(state),
    () => false,
  );
  useEffect(() => {
    if (totalTodos === 0) dispatch(fetchAllTodos());
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
