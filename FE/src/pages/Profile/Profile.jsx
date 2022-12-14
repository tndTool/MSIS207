import React, { useContext } from 'react';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';
import { AuthContext } from '../../context/authContext';

const Profile = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">Trang tài khoản</div>
                    <p>
                        Xin chào <strong>{currentUser?.Name}</strong> (không phải tài khoản <strong>{currentUser?.Name}</strong>? Hãy thoát ra và đăng
                        nhập vào tài khoản của bạn)
                    </p>
                    <p>
                        Từ trang quản lý tài khoản bạn có thể xem đơn hàng mới, quản lý địa chỉ giao hàng và thanh toán,
                        sửa mật khẩu và thông tin tài khoản.
                    </p>
                </div>
            </div>
        </Helmet>
    );
};

export default Profile;