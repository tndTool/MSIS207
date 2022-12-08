import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

export default function Footer() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('footer_content1')}>
                    <h3 className={cx('footer__heading')}>
                        <h2>
                            <b>TATURO'S SHOP</b>
                        </h2>
                    </h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <span className={cx('footer-text')}>Store Online: 0906131951</span>
                        </li>
                        <li className={cx('footer-item')}>
                            <span className={cx('footer-text')}>
                                HCM: Đường Hàn Thuyên, khu phố 6 P, Thủ Đức Open: 10h - 21h30
                            </span>
                        </li>
                        <li className={cx('footer-item')}>
                            <span className={cx('footer-text')}>
                                HCM: Đường Tạ Quang Bửu, khu phố 6 P, Thủ Đức Open: 10h - 21h30
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={cx('footer_content')}>
                    <h3 className={cx('footer__heading')}>
                        <b>CHÍNH SÁCH</b>
                    </h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <Link to="/">
                                <span class={cx('footer-item__link')}>CHÍNH SÁCH ĐỔI HÀNG</span>
                            </Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link to="/">
                                <span className={cx('footer-item__link')}>CHÍNH SÁCH BẢO MẬT</span>
                            </Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link to="/">
                                <span className={cx('footer-item__link')}>HỆ THỐNG MEMBER</span>
                            </Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link to="/">
                                <span className={cx('footer-item__link')}>HỆ THỐNG CỬA HÀNG</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('footer_content')}>
                    <h3 className={cx('footer__heading')}>
                        <b>DỊCH VỤ - HƯỚNG DẪN</b>
                    </h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <Link to="/">
                                <span class={cx('footer-item__link')}>GIAO HÀNG TẬN NƠI</span>
                            </Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link to="/" >
                                <span className={cx('footer-item__link')}>HƯỚNG DẪN ĐĂNG KÝ TÀI KHOẢN</span>
                            </Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link to="/" >
                                <span className={cx('footer-item__link')}>HƯỚNG DẪN BẢO QUẢN</span>
                            </Link>
                        </li>
                        <li className={cx('footer-item')}>
                            <Link to="/" >
                                <span className={cx('footer-item__link')}>TUYỂN DỤNG</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('footer_content')}>
                    <h3 className={cx('footer__heading')}>
                        <b>CỘNG ĐỒNG</b>
                    </h3>
                    <ul className={cx('footer-list')}>
                        <li className={cx('footer-item')}>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <span class={cx('footer-item__link')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <span>Facebook</span>
                                </span>
                            </a>
                        </li>
                        <li className={cx('footer-item')}>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <span className={cx('footer-item__link')}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span>Instagram</span>
                                </span>
                            </a>
                        </li>
                        <li className={cx('footer-item')}>
                            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
                                <span className={cx('footer-item__link')}>
                                    <FontAwesomeIcon icon={faTiktok} />
                                    <span>Tiktok</span>
                                </span>
                            </a>
                        </li>
                        <li className={cx('footer-item')}>
                            <a
                                href="https://github.com/l0ntdtn0l/Group13_MSIS207.N12.CTTT"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className={cx('footer-item__link')}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span>Github</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <p className={cx('footer-p')}>
                Công ty TNHH Thương Mại và Dịch Vụ TATURO'S SHOP
                <br />
                Trụ sở : Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh
                <br />
                Mã số thuế : 0301519977 do Sở kế hoạch và Đầu Tư TPHCM Cấp lần đầu ngày 25/01/2001, đăng ký thay đổi lần
                1, ngày 17/11/2022
            </p>

            <div className={cx('copyright')}>
                <p>
                    Copyright 2022 © <strong>TATUROSHOP</strong>
                </p>
            </div>
        </footer>
    );
}
