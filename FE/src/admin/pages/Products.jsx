import React, { useState } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Pagination from '../components/table/Pagination';

import Button from '~/components/Main/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteProduct, listProduct } from '../../action/productAction';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
    const {product} = useSelector((state) => state.productList)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteProduct({id}));
    }

    useEffect(() => {
        dispatch(listProduct())
    },[dispatch])

    // GET current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    
    // CHANGE PAGE
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">products manager</div>
                        <div className="admin__right__actions">
                            <div className="admin__right__actions__search">
                                <span>
                                    <input type="text" name="search" placeholder="Search..." />
                                </span>
                                <Button>Search</Button>
                            </div>
                            <div className="admin__right__actions__insert">
                                <Link to="/admin/products/add">
                                    <Button>+ Add a new product</Button>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="table-wrapper">
                           <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Image01</th>
                                        <th>Image02</th>
                                        <th>CategorySlug</th>
                                        <th>Colors</th>
                                        <th>Slug</th>
                                        <th>Size</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product?.slice(indexOfFirstPost, indexOfLastPost).map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Title}</td>
                                        <td>{item.Price}</td>
                                        <td><img src={item.Image01} alt="#"/></td>
                                        <td><img src={item.Image02} alt="#"/></td>
                                        <td>{item.Colors}</td>
                                        <td>{item.Slug}</td>
                                        <td>{item.Size}</td>
                                        <td>{item.Description}</td>
                                        <td>{item.Category}</td>
                                        <td>
                                            <Button size="sm">
                                                <i class='bx bxs-pencil'></i>
                                            </Button>
                                            <Button size="sm" onClick = {() => handleDelete(item.id)}>
                                                <i className="bx bxs-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                           </table>
                        </div>
                        <Pagination 
                            postPerPage={postPerPage}
                            totalPost={product?.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Products;
