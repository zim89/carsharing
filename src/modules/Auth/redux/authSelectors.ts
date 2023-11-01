import { RootState } from '@/app/store';

export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectError = (state: RootState) => state.auth.error;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUserData = (state: RootState) => state.auth.user;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
