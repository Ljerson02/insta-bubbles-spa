import { createSlice } from '@reduxjs/toolkit';
import { getAllBubbles, postBubble, uploadImage } from '../../../firebase';

export const bubblesSlice = createSlice({
  name: 'bubbles',
  initialState: {
    allBubbles: [],
    selectedBubble: null,
    selectedUser: null,
    loading: false,
    error: null,
  },
  reducers:{
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSelectedBubble: (state, action) => {
      state.selectedBubble = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    addBubbles: (state, action) => {
      state.allBubbles.push(...action.payload);
    },
    setBubbles: (state, action) => {
      state.allBubbles = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const startCreateBubble = (bubble, imageFile) => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const imageUploadResponse = await uploadImage(imageFile, 'insta-bubbles-images/');
      if(!imageUploadResponse.success) throw new Error(imageUploadResponse.error);
      bubble.image = imageUploadResponse.url;
      const response = await postBubble(bubble);
      if(!response.success) throw new Error(response.error);
      dispatch(addBubbles([response.bubble]));
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(setLoading(false));
  };
};

export const fetchBubbles = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { success, bubbles } = await getAllBubbles();
      if(!success) throw new Error(response.error);
      dispatch(setBubbles(bubbles));
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(setLoading(false));
  };
};

export const { setSelectedUser, setLoading, setSelectedBubble, addBubbles, setBubbles, setError } = bubblesSlice.actions;