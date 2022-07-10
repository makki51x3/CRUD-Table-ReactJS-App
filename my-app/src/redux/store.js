import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './HomeSlice';
import ViewReducer from './ViewSlice';

export const store = configureStore({
  reducer: {
    HomeReducer,
    ViewReducer
  },
});
