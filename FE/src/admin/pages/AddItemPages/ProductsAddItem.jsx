import React, { useState } from 'react';

import Sidebar from '~/admin/components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../action/productAction';

const ProductsAddItem = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image01, setImage01] = useState('');
    const [image02, setImage02] = useState('');
    const [categorySlug, setCategorySlug] = useState('');
    const [colors, setColors] = useState('');
    const [slug, setSlug] = useState('')
    const [size, setSize] = useState('');
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        dispatch(addProduct( {price, title, image01, image02, categorySlug, colors, slug, size, category, description}))
    }


    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">Insert Product</div>
                        <div className="checkout__left__box">
                            <div className="checkout__left__box__main">
                                <div className="checkout__left__box__main__left">
                                    <label for="name">Title*</label>
                                    <input type="text" name="name" onChange={(e) => setTitle(e.target.value)}/>

                                    <label for="price">Price*</label>
                                    <input type="text" name="price" onChange={(e) => setPrice(e.target.value)}/>

                                    <label for="image01">Image01*</label>
                                    <input type="text" name="image01" onChange={(e) => setImage01(e.target.value)}/>

                                    <label for="image02">Image02*</label>
                                    <input type="text" name="image02" onChange={(e) => setImage02(e.target.value)}/>

                                    <label for="categorySlug">CategorySlug*</label>
                                    <input type="text" name="categorySlug" onChange={(e) => setCategorySlug(e.target.value)}/>
                                </div>
                                <div className="checkout__left__box__main__right">
                                    <label for="colors">Colors*</label>
                                    <input type="text" name="colors" onChange={(e) => setColors(e.target.value)}/>

                                    <label for="slug">Slug*</label>
                                    <input type="text" name="slug" onChange={(e) => setSlug(e.target.value)}/>

                                    <label for="size">Size*</label>
                                    <input type="text" name="size" onChange={(e) => setSize(e.target.value)}/>

                                    <label for="category">Category*</label>
                                    <select name="category" onClick={(e) => setCategory(e.target.selectedOptions[0].text)}>
                                        <option value="0">Chọn</option>
                                        <option value="1">top</option>
                                        <option value="2">outwear</option>
                                        <option value="3">bottoms</option>
                                        <option value="4">accessories</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <label for="description">Description*</label>
                        <form>
                            <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description..."></textarea>
                        </form>
                        <Button onClick={handleSubmit} primary>Lưu thay đổi</Button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default ProductsAddItem;
