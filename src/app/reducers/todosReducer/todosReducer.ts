import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const fetchAllTodos = createAsyncThunk('/posts', async () => {
  const response = await fetch(
    'https://api.fake.rest/090aa8ae-ddef-4d3b-8d6f-4f0da2257828/todos',
  );
  return await response.json();
});

const todosAdapter = createEntityAdapter({});

const { actions, reducer } = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(),
  reducers: {
    updateOnePost: todosAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
      todosAdapter.addMany(state, payload.data);
    });
  },
});

export const { updateOnePost } = actions;
// @ts-ignore
export const todosSelectors = todosAdapter.getSelectors((state) => state.todos);

export default reducer;
