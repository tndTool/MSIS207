import React from 'react';
import Button from '~/components/Main/Button';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Orders = () => {

    const userCheckout = useSelector((state) => state.userCheckout);
    const { bill } = userCheckout;

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
                                    <td>{moment(JSON.parse(bill.billsID)).format('DD/MM/YYYY')}</td>
                                    <td>{bill.Status}</td>
                                    <td>{bill.Total} </td>
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
