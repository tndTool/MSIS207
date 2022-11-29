import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

export default function Login() {
    return (
        <div className={cx('')}>
            <section>
                <div className={cx('container')}>
                    <div className={cx('box')}>
                        <div className={cx('form-login')}>
                            <h2>SIGN IN</h2>

                            <div className={cx('form-login__inputBox')}>
                                <input type="text" required="required" />
                                <span>Email </span>
                                <i></i>
                            </div>

                            <div className={cx('form-login__inputBox')}>
                                <input type="password" required="required" />
                                <span>Password</span>
                                <i></i>
                            </div>

                            <div className={cx('form-login__links')}>
                                <Link to="#">
                                    <span>Forgot password?</span>
                                </Link>
                                <Link to="/register">
                                    <span>SIGN UP</span>
                                </Link>
                            </div>

                            <div className={cx('form-login__btn')}>
                                <Link to="/">
                                    <span>LOGIN</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
