import React from 'react';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';

const MyMembership = () => {
    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">hội viên</div>

                    <div className="profile__right__mymembership">
                        <table>
                            <thead>
                                <tr>
                                    <th>PLAN</th>
                                    <th>START</th>
                                    <th>EXPIRES</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Bronze</td>
                                    <td>07/12/2021</td>
                                    <td>N/A</td>
                                    <td>Active</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default MyMembership;