import React from 'react';
import { useSelector } from 'react-redux';
import Helmet from '~/components/Main/Helmet';
import moment from 'moment/moment';





const CheckoutView = () => {
    const userCheckout = useSelector((state) => state.userCheckout);
    const {bill} = userCheckout;
    return(
    <Helmet title="CheckoutView">
    <div className="header-title">
        <h2>Thanh toán</h2>
    </div>
    <div className="checkout">
        <div className="checkout__left">
            <div className="checkout__left__title">Chi tiết đơn hàng</div>
            <div className="checkout__left__box">
                
            </div>
        </div>

        <div className="checkout__right">
            <div className="checkoutView__right__message" style={{color: '#0e6c1f', fontWeight:"bold", margin: "20px"}}>
                Cảm ơn bạn. Đơn hàng đã được nhận
            </div>
            <div className='checkoutView__righ__detail'>
                <div>
                    <label style={{color: '#767575'}}>Mã đơn hàng:</label>
                    <span> {bill.billsID}</span>
                </div>
                <div>
                    <label style={{color: '#767575'}}>Ngày tạo:</label>
                    <span> {moment(JSON.parse(bill.billsID)).format('DD-MM-YYYY, hh:mm:ss a')}</span>
                </div>
                <div>
                    <label style={{color: '#767575'}}>Người Nhận:</label>
                    <span> {bill.Name}</span>
                </div>
                <div>
                    <label style={{color: '#767575'}}>Email:</label>
                    <span> {bill.Email}</span>
                </div>
                <div>
                    <label style={{color: '#767575'}}>Số điện thoại:</label>
                    <span> {bill.Phone}</span>
                </div>
                <div>
                    <label style={{color: '#767575'}}>Địa chỉ:</label>
                    <span> {bill.Street + ", " + bill.Ward + ", " + bill.District + ", " + bill.City}</span>
                </div>
                <div>
                    <label style={{color: '#767575'}}>Tổng cộng:</label>
                    <span> {bill.Total}</span>
                </div>
                <div>
                    <label style={{color: '#767575'}}>Phương thức thanh toán:</label>
                    <span> Trả tiền khi nhận hàng</span>
                </div>
            </div>
            <div className="checkout__right__list">
            </div>
        </div>
    </div>
</Helmet>
    )
};

export default CheckoutView;