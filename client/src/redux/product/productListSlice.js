import { createSlice } from "@reduxjs/toolkit";


const productListSlice = createSlice({
    name: 'product',
    initialState: {},
    reducers: {
        //GET ALL PRODUCT
        listSuccess: (state, action) => {
            state.product = action.payload;
        },
        listFail: (state, action) => {
            state.error = action.payload;
        },

        // DETETE
        deleteSuccess: (state, action) => {
            state.product = action.payload;
        },
        deleteFail: (state, action) => {
            state.error = action.payload;
        },
        // ADD
        addSuccess: (state, action) => {
            state.product = action.payload;
        },
        addFail: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {listSuccess, listFail, deleteSuccess, deleteFail, addSuccess, addFail} = productListSlice.actions;
export default productListSlice.reducer;