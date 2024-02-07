import { configureStore } from '@reduxjs/toolkit';
import designSlice from './slices/designSlice';

const store = configureStore({
  reducer: {
    design: designSlice,
  },
  devTools: true,
});

export default store;