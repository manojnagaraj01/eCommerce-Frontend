import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../Slice/AuthSlice';
const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
 
export default store;