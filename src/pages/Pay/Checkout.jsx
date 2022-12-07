import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import Helmet from '~/components/Main/Helmet';
import CheckoutSlide from '~/components/Main/CheckoutSlide';

import productData from '~/assets/fake-data/products';
import numberWithCommas from '~/utils/numberWithCommas';
import Button from '~/components/Main/Button';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cartItems.value);

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems));
        setTotalPrice(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
    }, [cartItems]);

    return (
        <Helmet title="Checkout">
            <div className="header-title">
                <h2>Thanh toán</h2>
            </div>
            <div className="checkout">
                <div className="checkout__left">
                    <div className="checkout__left__title">thông tin thanh toán</div>
                    <div className="checkout__left__box">
                        <label for="fullName">Họ và tên*</label>
                        <input type="text" name="fullName" required />

                        <label for="phoneNumber">Số điện thoại*</label>
                        <input type="text" name="phonNumber" required />

                        <label for="email">Địa chỉ email*</label>
                        <input type="text" name="email" required />

                        <label for="city">Tỉnh/Thành phố*</label>
                        <input type="text" name="city" required />

                        <label for="district">Quận huyện*</label>
                        <input type="text" name="district" required />

                        <label for="commune">Xã/Phường/Thị trấn*</label>
                        <input type="text" name="commune" required />

                        <label for="address">Địa chỉ *</label>
                        <input type="text" name="address" required />
                    </div>
                </div>

                <div className="checkout__right">
                    <div className="checkout__right__title">đơn hàng của bạn</div>

                    <div className="checkout__right__list">
                        {cartProducts.map((item, index) => (
                            <CheckoutSlide item={item} key={index} />
                        ))}
                    </div>

                    <div className="checkout__right__price">
                        <span>Thành tiền:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                    </div>

                    <div className="checkout__right__button">
                        <Button size="block">đặt hàng</Button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Checkout;
