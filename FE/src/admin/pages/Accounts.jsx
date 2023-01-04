import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';

import Button from '~/components/Main/Button';
import request from '../../utils/request';


const Accounts = () => {

    const [user, setUser] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const {data} = await request.get('/users/getUsers');
            setUser(data)
        }
        fetchData();
    },[]);

    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">accounts manager</div>
                        <div className="admin__right__actions">
                            <div className="admin__right__actions__search">
                                <span>
                                    <input type="text" name="search" placeholder="Search..." />
                                </span>
                                <Button>Search</Button>
                            </div>
                            <div className="admin__right__actions__insert">
                                <Link to="/admin/accounts/add">
                                    <Button>+ Add a new account</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="card__body">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Address}</td>
                                        <td>
                                        {!item.isAdmin ?
                                        <select>
                                            <option value="0">User</option>
                                            <option value="1">Admin</option>
                                        </select>
                                        :
                                        <select>
                                            <option value="0">Admin</option>
                                            <option value="1">User</option>
                                        </select>}
                                        </td>
                                        <td>
                                            <Link to="/admin/accounts/update">
                                                <Button size="sm">
                                                <i class='bx bxs-show'></i>
                                                </Button>
                                            </Link>
                                            <Button size="sm">
                                                <i className="bx bxs-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Accounts;
