import { addFail, addSuccess, deleteFail, deleteSuccess, listFail, listSuccess } from '../redux/product/productListSlice';
import request from '../utils/request';

export const listProduct = () => async (dispatch) => {
    try {
       const {data} = await request.get('/product/getAll');
       dispatch(listSuccess(data));
    } catch (error) {
        dispatch(listFail(error.response.data));
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const {data} = await request.post('/product/deleteProduct', id);
        dispatch(deleteSuccess(data));
    } catch (error) {
        dispatch(deleteFail(error));
    }
};

export const addProduct = (inputs) => async (dispatch) => {
    try {
        const {data} = await request.post('/product/addProduct',  inputs);
        dispatch(addSuccess(data));
        window.location.reload();
    } catch (error) {
        dispatch(addFail(error));
    }
}