import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import { EntityId } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../app/reducers/rootReducer';
import {
  removeOne,
  todosSelectors,
  updateOne,
} from '../../app/reducers/todosReducer/todosReducer';

const TodoItem = ({ id }: { id: EntityId }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => todosSelectors.selectById(state, id));

  if (!todo) return null;
  return (
    <ListItem
      button
      component="li"
      onClick={() => dispatch(updateOne({ id, changes: { done: !todo.done } }))}>
      <Checkbox checked={todo.done} />
      {todo.task}
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(removeOne(todo.id))}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
