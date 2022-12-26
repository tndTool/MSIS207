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
            <div className="checkout__right__item__info">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Số Lượng</th>
                            <th>Giá Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <div className="checkout__right__item__image"><img src={item.product.image01} alt="" /> </div></td>
                            <td><div className="checkout__right__item__info__name">{`${item.product.title} - ${item.color} - ${item.size}`}</div></td>
                            <td><div className="checkout__right__item__info__quantity">{quantity}</div></td>
                            <td><div className="checkout__right__item__info__price">{numberWithCommas(item.price)}₫</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CheckoutSlide.propTypes = {
    item: PropTypes.object,
};

export default CheckoutSlide;
