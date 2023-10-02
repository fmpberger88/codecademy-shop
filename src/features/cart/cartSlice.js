import { createSlice } from '@reduxjs/toolkit';

const initialCart = {};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addItem: (state, action) => {
            const { name, price } = action.payload;
            const quantity = state[name] ? state[name].quantity + 1 : 1;
            state[name] = { price, quantity };
        },
        changeItemQuantity: (state, action) => {
            const { name, newQuantity } = action.payload;
            if (state[name]) {
                state[name].quantity = newQuantity;
            }
        },
    },
});

export const { addItem, changeItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
