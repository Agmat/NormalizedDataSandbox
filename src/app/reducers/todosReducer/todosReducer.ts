import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Todo } from '../../../types/Todo';

export const fetchAllTodos = createAsyncThunk('/posts', async () => {
  const response = await fetch(
    'https://api.fake.rest/090aa8ae-ddef-4d3b-8d6f-4f0da2257828/todos',
  );
  return await response.json();
});

export const fetchOneTodo = createAsyncThunk('/todo', async () => {
  const response = await fetch(
    'https://api.fake.rest/090aa8ae-ddef-4d3b-8d6f-4f0da2257828/todo',
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
// @ts-ignore
export const todosSelectors = todosAdapter.getSelectors((state) => state.todos);

export default reducer;
