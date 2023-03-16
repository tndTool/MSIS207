import { createSlice } from '@reduxjs/toolkit';

const userLoginSlice = createSlice({
    name: 'userInfo',
    initialState: {},
    reducers: {
        loginSuccess: (state, action) => {
            return (state = { isSuccess: true, userInfo: action.payload });
        },
        loginFail: (state, action) => {
            return (state = { error: action.payload });
        },
        userLogout: (state) => {
            return (state = {});
        },
    },
});

export const { loginSuccess, loginFail, userLogout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
