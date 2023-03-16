import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Helmet from '~/components/Main/Helmet';
import moment from 'moment/moment';

import productData from '~/assets/fake-data/products';
import CheckoutSlide from '~/components/Main/CheckoutSlide';
import ProfileSide from '../../components/Main/ProfileSide';

const InvoiceView = () => {
    const userCheckout = useSelector((state) => state.userCheckout);
    const { bill } = userCheckout;

    const cartItems = useSelector((state) => state.cartItems.value);
    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems));
    }, [cartItems]);

    return (
        <Helmet title="Orderview">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />
            <div className="profile__right">
                <div className="profile__right__title">Chi tiết đơn hàng</div>
                <div className="profile__right__coupons">
                        <p>
                            Đơn hàng <strong>#{bill.billsID}</strong> đã được đặt lúc <strong>{moment(JSON.parse(bill.billsID)).format('DD/MM/YYYY')}</strong> và hiện tại là <strong>{bill.Status}</strong>
                        </p>
                    </div>
            <div className="checkout">
                <div className="checkout__left">
                <div className="checkout__right__title">thông tin thanh toán</div>
                        <div className="checkout__right__detail">
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
                                <label style={{ color: '#767575' }}>Phương thức thanh toán:</label>
                                <span> Trả tiền khi nhận hàng</span>
                            </div>
                            <div>
                                <label style={{ color: '#767575' }}>Tổng cộng:</label>
                                <span style={{ color: '#f05023' }}> {bill.Total}₫</span>
                            </div>
                        </div>
                    </div>
                    <div className="checkout__rightt">
                        <div className="checkout__right__title">Sản phẩm</div>
                        <div className="checkout__right__box">
                            <div className="checkout__right__list">
                                {cartProducts.map((item, index) => (
                                    <CheckoutSlide item={item} key={index} />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Helmet>
    );
};

export default InvoiceView;
