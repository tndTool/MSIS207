// Hooks:
import { useEffect, useState } from 'react';

// CSS/SCSS:
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// Icons:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faCartArrowDown,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

// Tippy:
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

// Components:
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

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
            to: '/login',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img
                        width="200"
                        height="65"
                        src="https://res.cloudinary.com/dcwka06ph/image/upload/v1669344948/Website_project/logo_mwaet4.jpg"
                        alt="Taturo's Shop"
                    />
                </Link>

                <div className="actions">
                    <Button primary to="/top">
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
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>History</h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search...   " spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
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
