import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import inventorySlice from "../features/inventory/inventorySlice";
import currencyFilterSlice from '../features/currencyFilter/currencyFilterSlice';

const store = configureStore({
    reducer: {
        currencyFilter: currencyFilterSlice,
        cart: cartReducer,
        inventory: inventorySlice,
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
