import { createSlice } from '@reduxjs/toolkit';
import { loginWithCredentials, signInWithGoogle, singUpWithCredentials } from '../../../firebase/firebaseAuthAdapter';
import { doLogout } from '../../../firebase';

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
    login: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isLogged = false;
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
      dispatch(setError(error));
    }
    dispatch(setLoading(false));
  };
};

export const startUserRegistrationWithCredentials = ( userName, email, password ) => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const response = await singUpWithCredentials(userName, email, password);
      if(!response.success) throw new Error(response.error);
      const user = { uid: response.uid, email, displayName: userName };
      dispatch(login(user));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};

export const startLoginWithCredentials = ( email, password ) => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const authResponse = await loginWithCredentials(email, password);
      if(!authResponse.success) throw new Error(authResponse.error);
      if(!authResponse.success) return;
      dispatch(login(authResponse.user));
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(setLoading(false));
  };
};

export const startLogout = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      await doLogout();
    } catch (error) {
      console.error('Error on user firebase logout');
    }
    dispatch(logout());
    dispatch(setLoading(false));
  };
};

export const {
  setLoading,
  login,
  logout,
  setError,
 } = authSlice.actions;
