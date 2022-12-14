import React, { useContext } from 'react';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';
import ProfileSide from '~/components/Main/ProfileSide';
import { AuthContext } from '../../context/authContext';

const Account = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">tài khoản</div>

                    <div className="profile__right__account">
                        <label for="fname">Họ*</label>
                        <input type="text" name="firstname" />

                        <label for="lname">Tên*</label>
                        <input type="text" name="lastname" />

                        <label for="username">Username*</label>
                        <input type="text" name="username" value={currentUser?.Name}/>

                        <label for="email">Email*</label>
                        <input type="text" name="email" value={currentUser?.Email} />

                        <h1>Thay đổi mật khẩu</h1>

                        <label for="currentpassword">Mật khẩu hiện tại</label>
                        <input type="password" name="password" />

                        <label for="username">Mật khẩu mới</label>
                        <input type="password" name="password" />

                        <label for="username">Xác nhận mật khẩu mới</label>
                        <input type="password" name="password" />

                        <Button>Lưu thay đổi</Button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Account;