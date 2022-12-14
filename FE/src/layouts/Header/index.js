// React:
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

// Icons:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUser, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// Tippy:
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Components:
import Button from '~/components/ButtonHeader';
import Menu from '~/components/Popper/Menu';
import Search from './Search';

// CSS/SCSS:
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { AuthContext } from '../../context/authContext';

const cx = classNames.bind(styles);

export default function Header() {
    const mainNav = [
        {
            title: 'Home',
            to: '/',
        },
        {
            title: 'Top',
            to: '/top',
        },
        {
            title: 'Outwear',
            to: '/outwear',
        },
        {
            title: 'Bottoms',
            to: '/bottoms',
        },
        {
            title: 'Accessories',
            to: '/accessories',
        },
    ];

    const userMenu = [
        {
            title: 'PROFILE',
            to: '/profile',
        },

        {
            title: 'ORDER',
            to: '/profile/orders',
        },

        {
            title: 'MY MEMBERSHIP',
            to: '/profile/membership',
        },

        {
            title: 'POINTS',
            to: '/profile/points',
        },

        {
            title: 'COUPONS',
            to: '/profile/coupons',
        },

        {
            title: 'ADDRESS',
            to: '/profile/address',
        },

        {
            title: 'ACCOUNT',
            to: '/profile/account',
        },

        {
            title: 'LOG OUT',
            to: '/profile/logout',
            separate: true,
        },
    ];

    const menuLeft = useRef(null);

    const menuToggle = () => menuLeft.current.classList.toggle('active');

    const {currentUser} = useContext(AuthContext);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header__logo')}>
                    <Link to="/">
                        <img
                            src="https://res.cloudinary.com/dcwka06ph/image/upload/v1669344948/Website_project/logo_mwaet4.jpg"
                            alt="Taturo's Shop"
                        />
                    </Link>
                </div>

                <div className={cx('header__menu')}>
                    <div className={cx('header__menu__mobile-toggle')} onClick={menuToggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    <div className={cx('header__menu__left')} ref={menuLeft}>
                        <div className={cx('header__menu__left__close')} onClick={menuToggle}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className={cx('header__menu__left__mainNav')} >
                        {mainNav.map((item) => (
                            <Button primary to={item.to} onClick={menuToggle}>
                                {item.title}
                            </Button>
                        ))}
                        </div>
                    </div>

                    <div className={cx('header__menu__right')}>
                        <div className={cx('header__menu__right__item')}>
                            <Search />
                        </div>

                        <div className={cx('header__menu__right__item')}>
                            {currentUser ? (
                                <>
                                    <Menu items={userMenu} delay={[0, 0]}>
                                        <Link to="/profile">
                                            <button className={cx('user-btn')}>
                                                <span className={cx('user-name')}>{currentUser?.Name}</span>
                                                <FontAwesomeIcon icon={faUser} />
                                            </button>
                                        </Link>
                                    </Menu>
                                </>
                            ) : (
                                <Button primary to="/login">
                                    Login / Register
                                </Button>
                            )}
                        </div>

                        <div className={cx('header__menu__right__item')}>
                            <Tippy delay={[0, 100]} content="Cart" placement="bottom">
                                <div className={cx('actions')}>
                                    <Button primary to="/cart">
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </Button>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
