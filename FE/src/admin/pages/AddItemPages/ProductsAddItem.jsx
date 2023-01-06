import React, { useState } from 'react';

import Sidebar from '~/admin/components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../action/productAction';

const ProductsAddItem = () => {

    const [inputs, setInputs] = useState({});

    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
    }
    const handleSubmit = () => {
        dispatch(addProduct(inputs))
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
                                    <input type="text" name="title" onChange={handleChange}/>

                                    <label for="price">Price*</label>
                                    <input type="text" name="price" onChange={handleChange}/>

                                    <label for="image01">Image01*</label>
                                    <input type="text" name="image01" onChange={handleChange}/>

                                    <label for="image02">Image02*</label>
                                    <input type="text" name="image02" onChange={handleChange}/>

                                    <label for="categorySlug">CategorySlug*</label>
                                    <input type="text" name="categorySlug" onChange={handleChange}/>
                                </div>
                                <div className="checkout__left__box__main__right">
                                    <label for="colors">Colors*</label>
                                    <input type="text" name="colors" onChange={handleChange}/>

                                    <label for="slug">Slug*</label>
                                    <input type="text" name="slug" onChange={handleChange}/>

                                    <label for="size">Size*</label>
                                    <input type="text" name="size" onChange={handleChange}/>

                                    <label for="category">Category*</label>
                                    <select name="category" onClick={handleChange}>
                                        <option value="">Chọn</option>
                                        <option value="top">top</option>
                                        <option value="outwear">outwear</option>
                                        <option value="bottoms">bottoms</option>
                                        <option value="accessories">accessories</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <label for="description">Description*</label>
                        <form>
                            <textarea name="description" onChange={handleChange} placeholder="Description..."></textarea>
                        </form>
                        <Button onClick={handleSubmit} primary>Lưu thay đổi</Button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default ProductsAddItem;
