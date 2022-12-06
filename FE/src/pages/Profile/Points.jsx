import React from 'react';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';

const Points = () => {
    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">điểm tích lũy</div>
                    <div className="profile__right__points">
                        <h1>Điểm tích lũy của bạn:</h1>
                        <p>Bạn đang có 5 Points</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>SỰ KIỆN</th>
                                    <th>NGÀY</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Points nhận được khi mua hàng</td>
                                    <td>07/12/2021</td>
                                    <td>+3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Points;