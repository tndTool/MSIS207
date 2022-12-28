import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Reset.module.scss';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../../action/userAction';

export default function ForgotPassword() {
    const cx = classNames.bind(styles);

    const [email, setEmail] = useState("");

    const [formErrors, setFormErrors] = useState({});


    const dispatch = useDispatch();
    const userForgot = useSelector((state) => state.userForgot);
    const { isSuccess, error } = userForgot;

    const handleChange = (e) => {
        setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (e.target.value !== 0 && Object.keys(formErrors).length !== 0) {
            setFormErrors((prev) => ({ ...prev, [e.target.name]: null }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(email));
        setFormErrors(validate(email));
    };

    const validate = (values) => {
        const errors = {};
        //thông báo lỗi nếu thông tin đăng kí sai hay k nhập
        if (!values.email) {
            errors.email = 'Enter your email';
        }

        return errors;
    };
    return (
        <div className={cx('container')}>
            <div className={cx('box')}>
                <div className={cx('form-login')}>
                    <h2>RESET PASSWORD</h2>

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
                            <div>Verification code has been sent to email address, please confirm</div>
                        </div>
                    ) : null}

                    <div className={cx('form-login__inputBox')}>
                        <input type="text" required="required" name="email" onChange={handleChange} />

                        <span>Email </span>

                        <i></i>
                    </div>
                    <p>{formErrors.email}</p>

                    <div className={cx('form-login__btn')}>
                        <span onClick={handleSubmit}>Send</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
