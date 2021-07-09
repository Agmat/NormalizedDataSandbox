import './App.css';

import React, { useState } from 'react';
import React, { useEffect } from 'react';

import { fetchAllTodos } from './app/reducers/todosReducer/todosReducer';
import store from './app/store';

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
