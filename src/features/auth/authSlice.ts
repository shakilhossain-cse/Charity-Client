import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';
// import { fetchCount } from './counterAPI';

export interface AuthState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
  value: 0,
  status: 'idle',
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.value += 1;
    }
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(incrementAsync.fulfilled, (state, action) => {
//         state.status = 'idle';
//         state.value += action.payload;
//       });
//   },
});

export const { login } = authSlice.actions;

export const selectCount = (state: RootState) => state.auth.value;

export default authSlice.reducer;
