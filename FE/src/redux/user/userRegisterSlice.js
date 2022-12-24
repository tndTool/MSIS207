import { createSlice } from "@reduxjs/toolkit";

const userRegisterSlice = createSlice({
    name: 'userInfo',
    initialState: {},
    reducers: {
        registerSuccess: (state, action) => {
            return (state = { isSuccess: true, userInfo: action.payload });

        },
        registerFail: (state, action) => {
            return (state = { error: action.payload });
        },
    },
});

export const { registerSuccess, registerFail} = userRegisterSlice.actions

export default userRegisterSlice.reducer;