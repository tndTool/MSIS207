import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Helmet from '~/components/Main/Helmet';
import CheckoutSlide from '~/components/Main/CheckoutSlide';

import productData from '~/assets/fake-data/products';
import numberWithCommas from '~/utils/numberWithCommas';
import Button from '~/components/Main/Button';
import { checkout } from '../../action/billAction';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState();
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [street, setStreet] = useState("");
    
    const cartItems = useSelector((state) => state.cartItems.value);
    
    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));
    
    const [totalPrice, setTotalPrice] = useState(0);
    
    const history = useHistory();
    const dispatch = useDispatch();
    const userCheckout = useSelector((state) => state.userCheckout);
    const { error} = userCheckout;
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;
    
   
    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems));
        setTotalPrice(numberWithCommas(Number(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0))));
    }, [cartItems]);

    useEffect(() => {
        if (!userInfo) {
          history.push("/");
          alert("Vui lòng đăng nhập để mua hàng")
        } else {
          setEmail(userInfo.Email);
          if(userInfo.Firstname && userInfo.Lastname){
          setName(userInfo.Firstname + " " + userInfo.Lastname)
          };
        };

    }, [history, userInfo]);

    const handleSubmit = () => {
        dispatch(checkout({name, phone, email, city, district, ward, street, totalPrice}));
    }

    return (
        <Helmet title="Checkout">
            <div className="header-title">
                <h2>Thanh toán</h2>
            </div>
            {error && (<div className="checkout-fail">{error}</div>) }
            <div className="checkout">
                <div className="checkout__left">
                    <div className="checkout__left__title">thông tin thanh toán</div>
                    <div className="checkout__left__box">
                        <label for="fullName">Họ và tên*</label>
                        <input type="text" name="fullName" required value={name} onChange = {(e) => setName(e.target.value)}/>

                        <label for="phoneNumber">Số điện thoại*</label>
                        <input type="text" name="phonNumber" required onChange = {(e) => setPhone(e.target.value)}/>

                        <label for="email">Địa chỉ email*</label>
                        <input type="text"  name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label for="city">Tỉnh/ Thành phố*</label>
                        <select id ='item' name="city" required onChange={(e) => setCity(e.target.selectedOptions[0].text)}>
                                <option value="0">Chọn</option>
                                <option value="1">Thành phố Hồ Chí Minh</option>
                                <option value="Đồng Tháp">Tỉnh Đồng Tháp</option>
                                <option value="2">Tỉnh Bình Dương</option>
                                <option value="3">Tỉnh Nam Định</option>
                                <option value="3">Thành phố Hà Nội</option>
                                <option value="3">Tỉnh Đắc Lắk</option>
                                <option value="3">Tỉnh Bình Thuận</option>
                                <option value="3">Tỉnh Đồng Nai</option>
                                <option value="3">Tỉnh Lâm Đồng</option>
                                <option value="3">Tỉnh Điện Biên</option>
                        </select>

                        <label for="district">Quận huyện*</label>
                        <select name="district" required onChange={(e) => setDistrict(e.target.selectedOptions[0].text)}>
                                <option value="0">Chọn</option>
                                <option value="1">Thành phố Thủ Đức</option>
                                <option value="2">Quận 1</option>
                                <option value="3">Quận 2</option>
                                <option value="4">Quận 3</option>
                                <option value="5">Quận 4</option>
                                <option value="6">Quận 5</option>
                                <option value="7">Quận 6</option>
                                <option value="8">Quận 7</option>
                                <option value="9">Quận 8</option>
                                <option value="10">Quận 9</option>
                        </select>


                        <label for="commune">Xã/Phường/Thị trấn*</label>
                        <select name="ward" required onChange={(e) => setWard(e.target.selectedOptions[0].text)}>
                                <option value="0">Chọn</option>
                                <option value="1">Phường An Khánh</option>
                                <option value="2">Phường An Lợi Đông</option>
                                <option value="3">Phường An Phú</option>
                                <option value="4">Phường Bình Chiểu</option>
                                <option value="5">Phường Bình Thọ</option>
                                <option value="6">Phường Bình Trưng Tây</option>
                                <option value="7">Phường An Phú</option>
                        </select>

                        <label for="address">Địa chỉ *</label>
                        <input type="text" name="address" required onChange = {(e) => setStreet(e.target.value)}/>
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
                        <span>Thành tiền:</span> <span>{totalPrice}</span>
                    </div>
                    
                    <div className="checkout__right__button">
                        <Button onClick={handleSubmit} size="block">đặt hàng</Button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Checkout;
