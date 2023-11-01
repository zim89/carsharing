import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  register,
  login,
  refresh,
  setToken,
  logout,
  update,
  resetPassword,
  updatePassword,
  remove,
  getRemoveKey,
} from './authOperations';

export interface AuthState {
  user: object | null;
  token: string | null;
  isGoogleAuth: boolean;
  error: object | null;
  isAuth: boolean;
  isLoading: boolean;
}
const initialState: AuthState = {
  user: null,
  token: null,
  isGoogleAuth: false,
  error: null,
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      setToken(action.payload);
    },
    clearError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) =>
    builder
      // REGISTER
      .addCase(register.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.isAuth = true;
        // state.user = action.payload.user;
        // state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
      })
      // LOGIN
      .addCase(login.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.isAuth = true;
        // state.user = action.payload.user;
        // state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
      })
      // LOGOUT
      .addCase(logout.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        // state.isLoading = false;
        // state.isAuth = false;
        // state.user = null;
        // state.token = '';
        // localStorage.removeItem('refreshToken');
        // localStorage.removeItem('token');
      })
      .addCase(logout.rejected, (state, action) => {
        // state.isLoading = false;
        // state.isAuth = false;
        // state.user = null;
        // state.token = '';
        // localStorage.removeItem('refreshToken');
        // localStorage.removeItem('token');
        // state.error = action.payload;
      })
      // REFRESH
      .addCase(refresh.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.isAuth = true;
        // state.user = action.payload.user;
        // state.token = action.payload.token;
        // state.isGoogleAuth = action.payload.user.isGoogleAuth;
      })
      .addCase(refresh.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
      })
      // UPDATE
      .addCase(update.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.user = action.payload;
      })
      .addCase(update.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.error.message;
      })
      // RESET PASSWORD
      .addCase(resetPassword.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        // state.isLoading = false;
        // state.isAuth = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
      })
      // UPDATE PASSWORD
      .addCase(updatePassword.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        // state.isLoading = false;
        // state.error = null;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.error.message;
      })
      // REMOVE
      .addCase(remove.pending, (state) => {
        // state.isLoading = true;
        // state.error = null;
      })
      .addCase(remove.fulfilled, (state) => {
        // state.isLoading = false;
        // state.isAuth = false;
        // state.user = null;
        // state.token = '';
        // localStorage.removeItem('refreshToken');
        // localStorage.removeItem('token');
      })
      .addCase(remove.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
      })
      .addCase(getRemoveKey.pending, (state) => {
        // state.isLoading = true;
      })
      .addCase(getRemoveKey.fulfilled, (state) => {
        // state.isLoading = false;
      })
      .addCase(getRemoveKey.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
      }),
});

export const { clearError, updateToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
