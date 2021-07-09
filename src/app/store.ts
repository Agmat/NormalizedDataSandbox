import { Action, configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './reducers/rootReducer';

export const storeOptions: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
};

const store = configureStore(storeOptions);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
