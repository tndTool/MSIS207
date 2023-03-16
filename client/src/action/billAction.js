import { checkoutSuccess, checkoutFail } from '~/redux/bill/userCheckoutSlice';
import { listFail, listSuccess } from '../redux/bill/billsListSlice';
import request from '../utils/request';

export const checkout = (inputs) => async (dispatch) => {
    try {
        console.log(inputs)
        const { data } = await request.post('/bill/checkout', inputs);
        localStorage.setItem('bill', JSON.stringify(data));
        dispatch(checkoutSuccess(data));
        window.location.href = '/checkout/view';
    } catch (error) {
        dispatch(checkoutFail(error.response.data));
    }
};

export const listBills = () => async (dispatch) => {
    try {
       const {data} = await request.get('/bill/getAll');
       dispatch(listSuccess(data));
    } catch (error) {
        dispatch(listFail(error.response.data));
    }
};
