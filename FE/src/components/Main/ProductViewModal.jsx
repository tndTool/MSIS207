import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ProductView from './ProductView';

import Button from './Button';

import { remove } from '~/redux/product-modal/productModalSlice';

import request from '../../utils/request';

const ProductViewModal = () => {
    const productSlug = useSelector((state) => state.productModal.value);

    const dispatch = useDispatch();

    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const {data} = await request.get('/product/getAll');
            setProduct(data.find((e) => e.Slug === productSlug))
        }
        fetchData();    
    }, [ productSlug]);

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button size="sm" onClick={() => dispatch(remove())}>
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;