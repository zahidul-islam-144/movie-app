import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { movieApi } from '../services/movieApi';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(movieApi.middleware),
})
setupListeners(store.dispatch);