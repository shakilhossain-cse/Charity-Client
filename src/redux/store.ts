import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../features/auth/authAPI';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


setupListeners(store.dispatch)