import { createSlice } from "@reduxjs/toolkit";


const userLoginSlice = createSlice({
    name: 'userInfo',
    initialState:{},
    reducers: {
        updateSuccess: (state, action) => {
            return state = {userInfo: action.payload};
        },
        updateFail: (state, action) => {

        },
    },
});

export const {updateSuccess, updateFail} = userLoginSlice.actions
export default userLoginSlice.reducer;