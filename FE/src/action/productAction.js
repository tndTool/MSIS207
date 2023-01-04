import { listSuccess, listFail } from '~/redux/product/productListSlice';
import { deleteFail, deleteSuccess } from '../redux/product/productListSlice';
import request from '../utils/request';

export const listProduct = () => async (dispatch) => {
    try {
       const {data} = await request.get('/product/getAll');
       dispatch(listSuccess(data));
    } catch (error) {
        dispatch(listFail(error.response.data));
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        console.log(id)
        const data = await request.post('/product/deleteProduct', id);
        console.log(data)
        dispatch(deleteSuccess(data));
    } catch (error) {
        dispatch(deleteFail(error));
    }
}