import React from 'react';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';

const Address = () => {
    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">địa chỉ</div>

                    <div className="profile__right__address">
                        <p>Các địa chỉ bên dưới mặc định sẽ được sử dụng ở trang thanh toán sản phẩm.</p>
                        <h1>Địa chỉ giao hàng:</h1>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Address;