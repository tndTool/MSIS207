import { addFail, addSuccess, deleteFail, deleteSuccess, getFail, getSuccess } from '../redux/employee/employeeSlice';
import request from '../utils/request';

export const getEmployee = () => async (dispatch) => {
    try {
       const {data} = await request.get('/employee/getEmployee');
       dispatch(getSuccess(data));
    } catch (error) {
        dispatch(getFail(error.response.data));
    }
};

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        const {data} = await request.post('/employee/deleteEmployee', id);
        dispatch(deleteSuccess(data));
    } catch (error) {
        dispatch(deleteFail(error));
    }
};

export const addEmployee = (inputs) => async (dispatch) => {
    try {
        const {data} = await request.post('/employee/addEmployee',  inputs);
        dispatch(addSuccess(data));
        window.location.reload();
    } catch (error) {
        dispatch(addFail(error));
    }
}