import { createSlice } from '@reduxjs/toolkit';


const employeeSlice = createSlice({
    name: 'employee',
    initialState: {},
    reducers: {
        // GET ALL EMPLOYEE
        getSuccess: (state, action) => {
            state.employee = action.payload;
        },
        getFail: (state, action) => {
            state.error = action.payload;
        },
        // ADD
        addSuccess: (state, action) => {
            state.employee = action.payload;
        },
        addFail: (state, action) => {
            state.error = action.payload;
        },
        // DELETE
        deleteSuccess: (state, action) => {
            state.employee = action.payload;
        },
        deleteFail: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { getSuccess, getFail, addSuccess, addFail, deleteSuccess, deleteFail } = employeeSlice.actions;

export default employeeSlice.reducer;
