import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../udemy-project-codes/fast-react-pizza/src/features/user/userSlice.js';
import cartReducer from '../../udemy-project-codes/fast-react-pizza/src/features/cart/cartSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
