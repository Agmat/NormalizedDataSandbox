import './App.css';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAllTodos } from './app/reducers/todosReducer/todosReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <div className="App">
      <p>OK MEC</p>
    </div>
  );
};

export default App;
