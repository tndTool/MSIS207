import { createSlice } from '@reduxjs/toolkit';

const userCheckoutSlice = createSlice({
    name: 'checkout',
    initialState: {},
    reducers: {
        checkoutSuccess: (state, action) => {
            return (state = { isSuccess: true, bill: action.payload });
        },
        checkoutFail: (state, action) => {
            return (state = { error: action.payload });
        },
    },
});

export const { checkoutSuccess, checkoutFail } = userCheckoutSlice.actions;

export default userCheckoutSlice.reducer;
