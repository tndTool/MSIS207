import { createSlice } from '@reduxjs/toolkit';

const billInfoFromStorage = localStorage.getItem("bill") ? JSON.parse(localStorage.getItem("bill")) : null;

const userCheckoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        bill: billInfoFromStorage,
    },
    reducers: {
        checkoutSuccess: (state, action) => {
            return (state = { bill: action.payload });
        },
        checkoutFail: (state, action) => {
            return (state = { error: action.payload });
        },
    },
});

export const { checkoutSuccess, checkoutFail } = userCheckoutSlice.actions;

export default userCheckoutSlice.reducer;
