import { createSlice } from "@reduxjs/toolkit";


const productListSlice = createSlice({
    name: 'product',
    initialState: {},
    reducers: {
        listSuccess: (state, action) => {
            return state = {product: action.payload};
        },
        listFail: (state, action) => {
            return state = {error: action.payload};
        },
    },
});

export const {listSuccess, listFail} = productListSlice.actions;
export default productListSlice.reducer;