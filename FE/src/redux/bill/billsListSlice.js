import { createSlice } from "@reduxjs/toolkit";


const billsListSlice = createSlice({
    name: 'bills',
    initialState: {},
    reducers: {
        //GET ALL PRODUCT
        listSuccess: (state, action) => {
            state.bill = action.payload;
        },
        listFail: (state, action) => {
            state.error = action.payload;
        },

        // DETETE
        deleteSuccess: (state, action) => {
            state.bill = action.payload;
        },
        deleteFail: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {listSuccess, listFail, deleteSuccess, deleteFail} = billsListSlice.actions;
export default billsListSlice.reducer;