import React from 'react';
import Button from '~/components/Main/Button';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';

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
                                            <Button size="sm">Xem</Button>
                                        </span>
                                        <span>
                                            <Button size="sm">Hóa đơn</Button>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>04/02/2021</td>
                                    <td>Đã hoàn thành</td>
                                    <td>350,000₫ </td>
                                    <td>
                                        <span>
                                            <Button size="sm">Xem</Button>
                                        </span>
                                        <span>
                                            <Button size="sm">Hóa đơn</Button>
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