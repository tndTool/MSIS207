import React, { useCallback, useState, useEffect, useRef } from 'react';

import Helmet from '~/components/Main/Helmet';
import CheckBox from '~/components/Main/CheckBox';
import Button from '~/components/Main/Button';
import InfinityList from '~/components/Main/InfinityList';

import productData from '~/assets/fake-data/products';

const Top = () => {
    const top_category = [
        {
            display: 'Áo Thun',
            categorySlug: 'ao-thun',
        },
        {
            display: 'Áo Polo',
            categorySlug: 'ao-polo',
        },
        {
            display: 'Áo Croptop',
            categorySlug: 'ao-croptop',
        },
    ];

    const colors = [
        {
            display: 'Trắng',
            color: 'white',
        },
        {
            display: 'Đen',
            color: 'black',
        },
        {
            display: 'Xanh dương',
            color: 'blue',
        },
        {
            display: 'Xám',
            color: 'grey',
        },
        {
            display: 'Đỏ',
            color: 'red',
        },
        {
            display: 'Nâu',
            color: 'brown',
        },
        {
            display: 'Beige',
            color: 'be',
        },
    ];

    const size = [
        {
            display: 'S',
            size: 's',
        },
        {
            display: 'M',
            size: 'm',
        },
        {
            display: 'L',
            size: 'l',
        },
        {
            display: 'XL',
            size: 'xl',
        },
    ];

    const initFilter = {
        category: [],
        color: [],
        size: [],
    };

    const productList = productData.getAllTopProducts();

    const [products, setProducts] = useState(productList);

    const [filter, setFilter] = useState(initFilter);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'CATEGORY':
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
                    break;
                case 'COLOR':
                    setFilter({ ...filter, color: [...filter.color, item.color] });
                    break;
                case 'SIZE':
                    setFilter({ ...filter, size: [...filter.size, item.size] });
                    break;
                default:
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter((e) => e !== item.categorySlug);
                    setFilter({ ...filter, category: newCategory });
                    break;
                case 'COLOR':
                    const newColor = filter.color.filter((e) => e !== item.color);
                    setFilter({ ...filter, color: newColor });
                    break;
                case 'SIZE':
                    const newSize = filter.size.filter((e) => e !== item.size);
                    setFilter({ ...filter, size: newSize });
                    break;
                default:
            }
        }
    };

    const clearFilter = () => setFilter(initFilter);

    const updateProducts = useCallback(() => {
        let temp = productList;

        if (filter.category.length > 0) {
            temp = temp.filter((e) => filter.category.includes(e.categorySlug));
        }

        if (filter.color.length > 0) {
            temp = temp.filter((e) => {
                const check = e.colors.find((color) => filter.color.includes(color));
                return check !== undefined;
            });
        }

        if (filter.size.length > 0) {
            temp = temp.filter((e) => {
                const check = e.size.find((size) => filter.size.includes(size));
                return check !== undefined;
            });
        }

        setProducts(temp);
    }, [filter, productList]);

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    const filterRef = useRef(null);

    const showHideFilter = () => filterRef.current.classList.toggle('active');

    return (
        <Helmet title="Top">
            <div className="category">
                <div className="category__filter" ref={filterRef}>
                    <div className="category__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
                    <div className="category__filter__widget">
                        <div className="category__filter__widget__title">danh mục sản phẩm</div>
                        <div className="category__filter__widget__content">
                            {top_category.map((item, index) => (
                                <div key={index} className="top__filter__widget__content__item">
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect('CATEGORY', input.checked, item)}
                                        checked={filter.category.includes(item.categorySlug)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category__filter__widget">
                        <div className="category__filter__widget__title">màu sắc</div>
                        <div className="category__filter__widget__content">
                            {colors.map((item, index) => (
                                <div key={index} className="category__filter__widget__content__item">
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect('COLOR', input.checked, item)}
                                        checked={filter.color.includes(item.color)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category__filter__widget">
                        <div className="category__filter__widget__title">kích cỡ</div>
                        <div className="category__filter__widget__content">
                            {size.map((item, index) => (
                                <div key={index} className="category__filter__widget__content__item">
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect('SIZE', input.checked, item)}
                                        checked={filter.size.includes(item.size)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category__filter__widget">
                        <div className="category__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>
                                xóa bộ lọc
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="category__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>
                        bộ lọc
                    </Button>
                </div>
                <div className="category__content">
                    <InfinityList data={products} />
                </div>
            </div>
        </Helmet>
    );
};

export default Top;
