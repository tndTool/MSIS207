import React, { useEffect, useState } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Pagination from '../components/table/Pagination';

import Button from '~/components/Main/Button';
import { useDispatch, useSelector } from 'react-redux';
import { listBills } from '../../action/billAction';


const Bills = () => {
    const {bill} = useSelector((state) => state.billsList)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(7);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listBills());
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
                        <div className="admin__right__title">bills manager</div>
                        <div className="admin__right__actions">
                            <div className="admin__right__actions__search">
                                <span>
                                    <input type="text" name="search" placeholder="Search..." />
                                </span>
                                <Button>Search</Button>
                            </div>
                        </div>
                        <div className="table-wrapper">
                        <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customer</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Product name</th>
                                        <th>Status</th>
                                        <th>Created</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bill?.slice(indexOfFirstPost, indexOfLastPost).map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Street +  ", " + item.Ward + " " + item.District + ", " + item.City}</td>
                                        <td>{item.Phone}</td>
                                        <td>{item.Product}</td>
                                        <td>{item.Status}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.Total}</td>
                                        <td>
                                            <Button size="sm">
                                                <i class='bx bxs-show'></i>
                                            </Button>
                                            <Button size="sm">
                                                <i class='bx bxs-save' ></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                           </table>
                        </div>
                        <Pagination 
                            postPerPage={postPerPage}
                            totalPost={bill?.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Bills;
