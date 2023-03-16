import React from 'react';
import { useSelector } from 'react-redux';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';


const Profile = () => {

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

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
                        Xin chào <strong>{userInfo.Name}</strong> (không phải tài khoản <strong>{userInfo.Name}</strong>? Hãy thoát ra và đăng
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