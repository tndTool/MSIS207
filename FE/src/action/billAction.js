import { checkoutSuccess, checkoutFail } from '~/redux/bill/userCheckoutSlice';
import request from '../utils/request';

export const checkout = (inputs) => async (dispatch) => {
    try {
        const {data} = await request.post('/bill/checkout', inputs);
        localStorage.removeItem("cartItems");
        localStorage.setItem("bill", JSON.stringify(data));
        dispatch(checkoutSuccess(data));
        window.location.href="/view";
    } catch (error) {
        dispatch(checkoutFail(error.response.data));
    }
}