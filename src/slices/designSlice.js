import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  designData: localStorage.getItem('designData') ? JSON.parse(localStorage.getItem('designData')) : {
    tool: {
      fabric: 1,
      sleeve: 1,
    },
    modified: null,
    img: 'http://localhost:3000/t-shirts/white.webp',
    price: '$0',
    price_raw: 0
  },
};

const designSlice = createSlice({
  name: 'designData',
  initialState,
  reducers: {
    setDesignData: (state, action) => {
      state.designData = action.payload;
      localStorage.setItem('designData', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('designData');
    },
  },
});

export const { setDesignData, logout } = designSlice.actions;

export default designSlice.reducer;