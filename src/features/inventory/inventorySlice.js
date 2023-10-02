import { createSlice } from '@reduxjs/toolkit';
import { inventoryData } from '../../data.js';

const initialInventory = [];

const inventorySlice = createSlice({
    name: 'inventory',
    initialState: initialInventory,
    reducers: {
        loadData: (state, action) => {
            return [...state, ...action.payload];
        },
    },
});

export const { loadData } = inventorySlice.actions;

export default inventorySlice.reducer;
