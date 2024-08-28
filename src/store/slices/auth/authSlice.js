import { createSlice } from '@reduxjs/toolkit';
import { signInWithGoogle } from '../../../firebase/firebaseAuthAdapter';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLogged: !!localStorage.getItem('user'),
    loading: false,
    error: null,
  },
  reducers:{
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    login: (state, payload) => {
      state.isLogged = true;
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isLogged = true;
      state.user = null;
      localStorage.removeItem('user');
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const doGoogleLogin = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const authResponse = await signInWithGoogle();
      if(!authResponse.success) return;
      dispatch(login(authResponse.user));
    } catch (error) {
      setError(error);
    }
    dispatch(setLoading(false));
  };
};

export const {
  setLoading,
  login,
  logout,
  setError
 } = authSlice.actions;
