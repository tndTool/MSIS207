// Icons:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUser } from '@fortawesome/free-solid-svg-icons';

// Tippy:
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Components:
import Button from '~/components/ButtonHeader';
import Menu from '~/components/Popper/Menu';
import Search from './Search';
import { Link } from 'react-router-dom';

// CSS/SCSS:
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    const currentUser = true;

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

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-header')}>
                    <Link to="/">
                        <img
                            id=""
                            width="200"
                            height="65"
                            src="https://res.cloudinary.com/dcwka06ph/image/upload/v1669344948/Website_project/logo_mwaet4.jpg"
                            alt="Taturo's Shop"
                        />
                    </Link>
                </div>

                <div className={cx('actions')}>
                    <Button primary to="/top" className="">
                        Top
                    </Button>
                    <Button primary to="/outwear">
                        Outwear
                    </Button>
                    <Button primary to="/bottoms">
                        Bottoms
                    </Button>
                    <Button primary to="/accessories">
                        Accessories
                    </Button>
                </div>
            </div>

            <div className={cx('inner')}>
                <Search />

                <div className={cx('actionss')}>
                    {currentUser ? (
                        <>
                            <Menu items={userMenu} delay={[0, 0]}>
                                <Link to="/profile">
                                    <button className={cx('user-btn')}>
                                        <span className={cx('user-name')}>NguyenDucToan</span>
                                        <FontAwesomeIcon icon={faUser} />
                                    </button>
                                </Link>
                            </Menu>
                        </>
                    ) : (
                        <Button primary to="/login">
                            Login / Reister
                        </Button>
                    )}
                </div>
                <Tippy delay={[0, 100]} content="Cart" placement="bottom">
                    <div className={cx('actions')}>
                        <Button primary to="/cart">
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </Button>
                    </div>
                </Tippy>
            </div>
        </header>
    );
}
