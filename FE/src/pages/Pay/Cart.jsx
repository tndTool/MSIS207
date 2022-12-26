import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';
import CartItem from '~/components/Main/CartItem';
import Section, { SectionBody, SectionTitle } from '~/components/Main/Section';
import Grid from '~/components/Main/Grid';
import ProductCard from '~/components/Main/ProductCard';

import productData from '~/assets/fake-data/products';
import numberWithCommas from '~/utils/numberWithCommas';

const Cart = () => {
    const relatedProducts = productData.getProducts(4);

    const cartItems = useSelector((state) => state.cartItems.value);

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems));

    const [totalProducts, setTotalProducts] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems));
        setTotalPrice(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
    }, [cartItems]);

    return (
        <Helmet title="Cart">
            <div className="cart">
                <div className="cart__list">
                    {cartProducts.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span> <span>{numberWithCommas(Number(totalPrice))}₫</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        {totalProducts > 0 ? (
                            <Link to="/checkout">
                                <Button size="block">Đặt hàng</Button>
                            </Link>
                        ) : null}
                        <Link to="/">
                            <Button size="block">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={2} gap={20}>
                        {relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Cart;