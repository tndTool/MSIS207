import React from 'react';

import Sidebar from '~/admin/components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';

const ProductsUpdateItem = () => {
    <Helmet title="Admin">
        <div className="admin-container">
            <div className="admin-header__title">
                <h2>Admin</h2>
            </div>
            <div className="admin">
                <Sidebar />
                <div className="admin__right">
                    <div className="admin__right__title">Update Product</div>
                    <div className="checkout__left__box">
                        <div className="checkout__left__box__main">
                            <div className="checkout__left__box__main__left">
                                <label for="name">Title*</label>
                                <input type="text" name="name" />

                                <label for="price">Price*</label>
                                <input type="text" name="price" />

                                <label for="image01">Image01*</label>
                                <input type="text" name="image01" />

                                <label for="image02">Image02*</label>
                                <input type="text" name="image02" />

                                <label for="categorySlug">CategorySlug*</label>
                                <input type="text" name="categorySlug" />
                            </div>
                            <div className="checkout__left__box__main__right">
                                <label for="colors">Colors*</label>
                                <input type="text" name="colors" />

                                <label for="slug">Slug*</label>
                                <input type="text" name="slug" />

                                <label for="size">Size*</label>
                                <input type="text" name="size" />

                                <label for="category">Category*</label>
                                <select name="category">
                                    <option value="0">Top</option>
                                    <option value="1">Outwear</option>
                                    <option value="2">Bottoms</option>
                                    <option value="3">Accessories</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <label for="description">Description*</label>
                    <form>
                        <textarea placeholder="Description..."></textarea>
                    </form>
                    <Button primary>Lưu thay đổi</Button>
                </div>
            </div>
        </div>
    </Helmet>;
};

export default ProductsUpdateItem;
