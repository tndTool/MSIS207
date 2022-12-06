import React from 'react';
import ProfileSide from '~/components/Main/ProfileSide';

const Profile = () => {
    return (
        <>
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">Trang tài khoản</div>
                    <p>
                        Xin chào <strong>Toan</strong> (không phải tài khoản <strong>Toan</strong>? Hãy thoát ra và đăng
                        nhập vào tài khoản của bạn)
                    </p>
                    <p>
                        Từ trang quản lý tài khoản bạn có thể xem đơn hàng mới, quản lý địa chỉ giao hàng và thanh toán,
                        sửa mật khẩu và thông tin tài khoản.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Profile;