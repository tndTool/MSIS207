import React from 'react';
import Button from '~/components/Main/Button';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">Đơn hàng</div>
                    <div className="profile__right__orders">
                        <table>
                            <thead>
                                <tr>
                                    <th>Đơn hàng</th>
                                    <th>Ngày</th>
                                    <th>Tình trạng</th>
                                    <th>Tổng</th>
                                    <th>Các thao tác</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>04/02/2021</td>
                                    <td>Đã hoàn thành</td>
                                    <td>350,000₫ </td>
                                    <td>
                                        <span>
                                            <Link to="#">
                                                <Button to="/" size="sm">
                                                    Hóa đơn
                                                </Button>
                                            </Link>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Orders;
