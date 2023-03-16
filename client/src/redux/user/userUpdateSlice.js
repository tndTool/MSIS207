import { createSlice } from "@reduxjs/toolkit";


const userLoginSlice = createSlice({
    name: 'userInfo',
    initialState:{},
    reducers: {
        updateSuccess: (state, action) => {
            return state = {userInfo: action.payload};
        },
    },
});

export const {updateSuccess} = userLoginSlice.actions
export default userLoginSlice.reducer;