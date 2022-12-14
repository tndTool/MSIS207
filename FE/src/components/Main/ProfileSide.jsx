import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const ProfileSide = () => {

    const {currentUser} = useContext(AuthContext);
    return (
        <div className="profile__left">
            <div className="profile__left__user">
                <img
                    src="https://res.cloudinary.com/dcwka06ph/image/upload/v1670249020/Website_project/avatar_profile_ze9rtx.jpg"
                    alt="Userimage"
                />
                <span className="profile__left__user__name">
                    {currentUser?.Name}{' '}
                    <span>
                        <i>#2501</i>
                    </span>
                </span>
            </div>
            <ul className="profile__left__list">
                <Link to="/profile">
                    <li className="profile__left__item">
                        <button to="/">TRANG TÀI KHOẢN</button>
                    </li>
                </Link>
                <Link to="/profile/orders">
                    <li className="profile__left__item">
                        <button>ĐƠN HÀNG</button>
                    </li>
                </Link>
                <Link to="/profile/membership">
                    <li className="profile__left__item">
                        <button>HỘI VIÊN</button>
                    </li>
                </Link>
                <Link to="/profile/points">
                    <li className="profile__left__item">
                        <button>ĐIỂM TÍCH LŨY</button>
                    </li>
                </Link>
                <Link to="/profile/coupons">
                    <li className="profile__left__item">
                        <button>MÃ GIẢM GIÁ</button>
                    </li>
                </Link>
                <Link to="/profile/address">
                    <li className="profile__left__item">
                        <button>ĐỊA CHỈ</button>
                    </li>
                </Link>
                <Link to="/profile/account">
                    <li className="profile__left__item">
                        <button>TÀI KHOẢN</button>
                    </li>
                </Link>
                <Link to="/profile/logout">
                    <li className="profile__left__item">
                        <button>THOÁT</button>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default ProfileSide;