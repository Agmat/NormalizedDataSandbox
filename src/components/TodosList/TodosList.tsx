import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/reducers/rootReducer';
import { todosSelectors } from '../../app/reducers/todosReducer/todosReducer';
import TodoItem from '../TodoItem/TodoItem';

const TodosList = () => {
  const isLoading = useSelector((state: RootState) => state.todos.fetching);
  const todosIds = useSelector((state: RootState) => todosSelectors.selectIds(state));

  if (isLoading) return <CircularProgress />;
  return (
    <List>
      {todosIds.map((id) => (
        <TodoItem id={id} key={id} />
      ))}
    </List>
  );
};

export default TodosList;
