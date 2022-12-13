import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import numberWithCommas from '~/utils/numberWithCommas';

const CheckoutSlide = (props) => {
    const itemRef = useRef(null);

    const [item, setItem] = useState(props.item);

    const [quantity, setQuantity] = useState(props.item.quantity);

    useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    }, [props.item]);

    return (
        <div className="checkout__right__item" ref={itemRef}>
            <div className="checkout__right__item__image">
                <img src={item.product.image01} alt="" />
            </div>
            <div className="checkout__right__item__info">
                <div className="checkout__right__item__info__name">{`${item.product.title} - ${item.color} - ${item.size}`}</div>
                <div className="checkout__right__item__info__price">{numberWithCommas(item.price)}</div>
                <div className="checkout__right__item__info__quantity">{quantity}</div>
            </div>
        </div>
    );
};

CheckoutSlide.propTypes = {
    item: PropTypes.object,
};

export default CheckoutSlide;
