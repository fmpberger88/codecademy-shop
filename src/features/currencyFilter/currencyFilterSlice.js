import { createSlice } from '@reduxjs/toolkit';

const initialCurrencyFilter = 'USD';

export const currencyFilterSlice = createSlice({
    name: 'currencyFilter',
    initialState: initialCurrencyFilter,
    reducers: {
        setCurrency: (state, action) => {
            return action.payload;
        },
    },
});

export const { setCurrency } = currencyFilterSlice.actions;

export default currencyFilterSlice.reducer;
