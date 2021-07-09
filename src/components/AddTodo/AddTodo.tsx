import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchOneTodo } from '../../app/reducers/todosReducer/todosReducer';

const AddTodo = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<AddIcon />}
      onClick={() => dispatch(fetchOneTodo())}>
      Get a random todo
    </Button>
  );
};

export default AddTodo;
