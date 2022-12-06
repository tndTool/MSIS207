import React from 'react';
import ProfileSide from '~/components/Main/ProfileSide';

const Coupons = () => {
    return (
        <>
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">Mã giảm giá</div>

                    <div className="profile__right__coupons">
                        <p>
                            Danh sách các phiếu giảm giá hợp lệ và có sẵn để sử dụng. Nhấp vào phiếu giảm giá để sử dụng
                            nó. Phiếu giảm giá sẽ chỉ hiển thị khi có ít nhất một sản phẩm trong giỏ hàng.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Coupons;
