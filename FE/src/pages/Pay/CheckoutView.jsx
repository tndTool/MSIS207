import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Helmet from '~/components/Main/Helmet';
import moment from 'moment/moment';

import productData from '~/assets/fake-data/products';
import numberWithCommas from '~/utils/numberWithCommas';

import CheckoutSlide from '~/components/Main/CheckoutSlide';
import Button from '../../components/Main/Button';

const CheckoutView = () => {
    const userCheckout = useSelector((state) => state.userCheckout);
    const { bill } = userCheckout;

    const cartItems = useSelector((state) => state.cartItems.value);
    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems));
        setTotalPrice(
            numberWithCommas(
                Number(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0)),
            ),
        );
    }, [cartItems]);
    const handleSubmit = () => {
        // localStorage.removeItem("cartItems");
        window.location.href = '/';
    }

    return (
        <Helmet title="CheckoutView">
            <div className="header-title">
                <h2>Thanh toán</h2>
            </div>
            <div className="checkout">
                <div className="checkout__right">
                    <div className="checkout__right__title">Chi tiết đơn hàng</div>
                    <div className="checkout__right__box">
                        <div className="checkout__right__list">
                            {cartProducts.map((item, index) => (
                                <CheckoutSlide item={item} key={index} />
                            ))}
                        </div>
                        <div className="checkout__right__price">
                            <span>Thành tiền:</span> <span>{totalPrice}₫</span>
                        </div>
                    </div>
                </div>

                <div className="checkout__right">
                    <div
                        className="checkout__right__message"
                        style={{ color: '#0e6c1f', fontWeight: 'bold', margin: '20px', textAlign: 'center' }}
                    >
                        Cảm ơn bạn. Đơn hàng đã được nhận
                    </div>
                    <div className="checkout__right__detail">
                        <div>
                            <label style={{ color: '#767575' }}>Mã đơn hàng:</label>
                            <span> {bill.billsID}</span>
                        </div>
                        <div>
                            <label style={{ color: '#767575' }}>Ngày tạo:</label>
                            <span> {moment(JSON.parse(bill.billsID)).format('DD-MM-YYYY, hh:mm:ss a')}</span>
                        </div>
                        <div>
                            <label style={{ color: '#767575' }}>Người Nhận:</label>
                            <span> {bill.Name}</span>
                        </div>
                        <div>
                            <label style={{ color: '#767575' }}>Email:</label>
                            <span> {bill.Email}</span>
                        </div>
                        <div>
                            <label style={{ color: '#767575' }}>Số điện thoại:</label>
                            <span> {bill.Phone}</span>
                        </div>
                        <div>
                            <label style={{ color: '#767575' }}>Địa chỉ:</label>
                            <span> {bill.Street + ', ' + bill.Ward + ', ' + bill.District + ', ' + bill.City}</span>
                        </div>
                        <div>
                            <label style={{ color: '#767575' }}>Tổng cộng:</label>
                            <span style={{ color: '#f05023' }}> {bill.Total}₫</span>
                        </div>
                        <div>
                            <label style={{ color: '#767575' }}>Phương thức thanh toán:</label>
                            <span> Trả tiền khi nhận hàng</span>
                        </div>
                    </div>

                    <Link to="/">
                        <Button onClick={handleSubmit} size="block">
                            Tiếp tục mua hàng
                        </Button>
                    </Link>
                </div>
            </div>
        </Helmet>
    );
};

export default CheckoutView;
