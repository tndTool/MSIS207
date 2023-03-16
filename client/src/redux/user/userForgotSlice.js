import { createSlice } from '@reduxjs/toolkit';

const userForgotSlice = createSlice({
    name: 'userForgot',
    initialState: {},
    reducers: {
        resetSuccess: (state) => {
            return (state = { isSuccess: true });
        },
        resetFail: (state, action) => {
            return (state = { error: action.payload });
        },
    },
});

export const { resetSuccess, resetFail } = userForgotSlice.actions;

export default userForgotSlice.reducer;
