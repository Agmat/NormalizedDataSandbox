import { combineReducers } from '@reduxjs/toolkit';

import todosReducers from './todosReducer';

const rootReducer = combineReducers({
  posts: todosReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
