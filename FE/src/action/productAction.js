import { listSuccess, listFail } from '~/redux/product/productListSlice';
import request from '../utils/request';

export const listProduct = () => async (dispatch) => {
    try {
       const {data} = request.get('/product/getall');
       dispatch(listSuccess(data));
    } catch (error) {
        dispatch(listFail(error.response.data));
    }
}