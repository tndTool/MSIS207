import React, { useEffect } from 'react';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInfo } from '../../action/userAction';
import { useHistory } from 'react-router-dom';

const Account = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        if (!userInfo) {
            history.push('/');
        } else {
            setFirstName(userInfo.Firstname);
            setLastName(userInfo.Lastname);
        }
    }, [history, userInfo]);

    const handleSubmit = () => {
        try {
            dispatch(updateInfo({ firstName, lastName }));
        } catch (error) {
            console.log(error);
        }
    };
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
                        <input
                            type="text"
                            name="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />

                        <label for="lname">Tên*</label>
                        <input
                            type="text"
                            name="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        <label for="username">Username*</label>
                        <input type="text" name="username" value={userInfo.Name} />

                        <label for="email">Email*</label>
                        <input type="text" name="email" value={userInfo.Email} />

                        <h1>Thay đổi mật khẩu</h1>

                        <label for="currentpassword">Mật khẩu hiện tại</label>
                        <input type="password" name="password" />

                        <label for="username">Mật khẩu mới</label>
                        <input type="password" name="password" />

                        <label for="username">Xác nhận mật khẩu mới</label>
                        <input type="password" name="password" />
                        <button onClick={handleSubmit}>Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Account;
