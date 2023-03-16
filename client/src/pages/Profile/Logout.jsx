import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '~/components/Main/Helmet';
import ProfileSide from '~/components/Main/ProfileSide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft, faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../action/userAction';

const Logout = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(logout);
    };

    return (
        <Helmet title="Account">
            <div className="header-title">
                <h2>Tài khoản</h2>
            </div>
            <div className="profile">
                <ProfileSide />

                <div className="profile__right">
                    <div className="profile__right__title">thoát</div>

                    <div className="profile__right__logout">
                        <p>
                            Bạn có chắc chắn muốn đăng xuất không?
                            <Link to="/">
                                <span>
                                    <span>
                                        <FontAwesomeIcon icon={faHandPointRight} />
                                    </span>
                                    <span onClick={handleSubmit}>Xác nhận và đăng xuất</span>
                                    <span>
                                        <FontAwesomeIcon icon={faHandPointLeft} />
                                    </span>
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Logout;
