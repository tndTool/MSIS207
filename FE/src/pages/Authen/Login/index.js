import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../action/userAction';

export default function Login() {
    const cx = classNames.bind(styles);

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { isSuccess, error, userInfo } = userLogin;
    useEffect(() => {
        if (userInfo) {
            setTimeout(() => history.push('/'), 800);
        }
    }, [history, userInfo]);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (e.target.value !== 0 && Object.keys(formErrors).length !== 0) {
            setFormErrors((prev) => ({ ...prev, [e.target.name]: null }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(inputs));
        setFormErrors(validate(inputs));
    };

    const validate = (values) => {
        const errors = {};
        //thông báo lỗi nếu thông tin đăng kí sai hay k nhập
        if (!values.email) {
            errors.email = 'Enter your email';
        }
        if (!values.password) {
            errors.password = 'Enter your password';
        }

        return errors;
    };
    return (
        <div className={cx('container')}>
            <div className={cx('box')}>
                <div className={cx('form-login')}>
                    <h2>SIGN IN</h2>

                    {error ? (
                        <div className={cx('ui-message_error')}>
                            <div>
                                {' '}
                                <HighlightOffIcon className={cx('ui-message_error-icon')} />
                            </div>
                            <div>{error}</div>
                        </div>
                    ) : null}

                    {isSuccess ? (
                        <div className={cx('ui-message_success')}>
                            <div>
                                {' '}
                                <CheckCircleOutlineIcon className={cx('ui-message_success-icon')} />
                            </div>
                            <div>Signed in succes</div>
                        </div>
                    ) : null}

                    <div className={cx('form-login__inputBox')}>
                        <input type="text" required="required" name="email" onChange={handleChange} />

                        <span>Email </span>

                        <i></i>
                    </div>
                    <p>{formErrors.email}</p>

                    <div className={cx('form-login__inputBox')}>
                        <input type="password" required="required" name="password" onChange={handleChange} />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <p>{formErrors.password}</p>

                    <div className={cx('form-login__links')}>
                        <Link to="#">
                            <span>Forgot password?</span>
                        </Link>
                        <Link to="/register">
                            <span>SIGN UP</span>
                        </Link>
                    </div>

                    <div className={cx('form-login__btn')}>
                        <span onClick={handleSubmit}>LOGIN</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
