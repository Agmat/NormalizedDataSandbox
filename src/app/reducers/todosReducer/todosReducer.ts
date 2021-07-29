import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Todo } from '../../../types/Todo';
import { RootState } from '../rootReducer';

export const fetchAllTodos = createAsyncThunk('/posts', async () => {
  const response = await fetch(
    'https://api.fake.rest/a9e1a93a-3cce-4dd6-91e4-3c37385d50aa/todos',
  );
  return await response.json();
});

export const fetchOneTodo = createAsyncThunk('/todo', async () => {
  const response = await fetch(
    'https://api.fake.rest/a9e1a93a-3cce-4dd6-91e4-3c37385d50aa/todo',
  );
  return await response.json();
});

const todosAdapter = createEntityAdapter<Todo>();

const { actions, reducer } = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    fetching: true,
  }),
  reducers: {
    removeOne: todosAdapter.removeOne,
    updateOne: todosAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
      state.fetching = false;
      todosAdapter.setAll(state, payload.data);
    });
    builder.addCase(fetchOneTodo.fulfilled, (state, { payload }) => {
      todosAdapter.addOne(state, payload.data);
    });
  },
});

export const { updateOne, removeOne } = actions;

export const todosSelectors = todosAdapter.getSelectors(
  (state: RootState) => state.todos,
);

export default reducer;
