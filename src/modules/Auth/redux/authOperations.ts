import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import handleError from './handleErrors';
import { selectToken } from './authSelectors';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://gt-project.onrender.com/api',
});

export const setToken = (token: string) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

// instance.interceptors.response.use(
//   async (response) => response,
//   async (error) => {
//     if (
//       error.response.status === 401 &&
//       error.response.data.message !== 'Password invalid' &&
//       error.response.data.message !== 'Email or password invalid' &&
//       error.response.data.message !== 'Secret key is invalid' &&
//       !error.config._retry
//     ) {
//       error.config._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');
//       try {
//         const { data } = await instance.post('/auth/refresh', {
//           refreshToken,
//         });
//         setToken(data.token);
//         localStorage.setItem('refreshToken', data.refreshToken);
//         localStorage.setItem('token', data.token);
//         return instance(error.config);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    // try {
    //   const { data: res } = await instance.post('/auth/signup', data);
    //   setToken(res.token);
    //   localStorage.setItem('refreshToken', res.refreshToken);
    //   return res;
    // } catch ({ response }) {
    // const errorMessage = error.response.data.message;
    // handleError(errorMessage);
    // return thunkApi.rejectWithValue(errorMessage);
    //   console.log(response);
    //   return rejectWithValue(response.data.message);
    // }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    // try {
    //   const { data: res } = await instance.post('/auth/login', data);
    //   setToken(res.token);
    //   localStorage.setItem('refreshToken', res.refreshToken);
    //   return res;
    // } catch ({ response }) {
    // const errorMessage = error.response.data.message;
    // handleError(errorMessage);
    // return thunkApi.rejectWithValue(errorMessage);
    //   return rejectWithValue(response.data.message);
    // }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, { rejectWithValue }) => {
    // try {
    //   const { data: res } = await instance.post('/auth/logout', data);
    //   setToken();
    //   return res;
    // } catch ({ response }) {
    //   return rejectWithValue(response.data.message);
    // }
  },
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    // try {
    //   const { data: res } = await instance.get('/users/current');
    //   const token = localStorage.getItem('token');
    //   return { token, user: res };
    // } catch ({ response }) {
    //   return rejectWithValue(response.data.message);
    // }
  },
);

export const update = createAsyncThunk(
  'auth/update',
  async (formData, thunkApi) => {
    // const token = selectToken(thunkApi.getState());
    // try {
    //   const { data: res } = await instance.patch('/users/edit', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   return res;
    // } catch ({ response }) {
    //   return thunkApi.rejectWithValue(response.data.message);
    // }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async (data, { rejectWithValue }) => {
    //   try {
    //     const { data: res } = await instance.post('/auth/reset', data);
    //     return res;
    //   } catch ({ response }) {
    // const errorMessage = error.response.data.message;
    // handleError(errorMessage);
    // return thunkApi.rejectWithValue(errorMessage);
    // return rejectWithValue(response.data.message);
    // }
  },
);

export const updatePassword = createAsyncThunk(
  'auth/update-password',
  async (formData, thunkApi) => {
    // const token = selectToken(thunkApi.getState());
    // try {
    //   const { data: res } = await instance.patch(
    //     '/users/edit/password',
    //     formData,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token}`,
    //       },
    //     },
    //   );
    //   return res;
    // } catch ({ response }) {
    //   return thunkApi.rejectWithValue(response.data.message);
    // }
  },
);

export const remove = createAsyncThunk(
  'auth/delete',
  async (secretKey, { rejectWithValue }) => {
    // try {
    //   const { data: res } = await instance.delete('/users/delete', {
    //     data: secretKey,
    //   });
    //   return res;
    // } catch ({ response }) {
    //   return rejectWithValue(response.data.message);
    // const errorMessage = error.response.data.message;
    // handleError(errorMessage);
    // return thunkApi.rejectWithValue(errorMessage);
    // }
  },
);

// FIXME: not edit code
export const getRemoveKey = createAsyncThunk(
  'auth/getRemoveKey',
  async (_, thunkApi) => {
    // try {
    //   const { data } = await instance.get('/auth/removekey');
    //   console.log('data: ', data);
    //   // return data;
    // } catch (error) {
    //   return thunkApi.rejectWithValue(error.response.data.message);
    // }
  },
);
