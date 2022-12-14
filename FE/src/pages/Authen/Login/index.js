import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { AuthContext } from '../../../context/authContext';

export default function Login() {
    const cx = classNames.bind(styles);

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [submitError, setSubmitError] = useState();

    const {login, resStatus} = useContext(AuthContext);


    const history = useHistory();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (e.target.value !== 0 && Object.keys(formErrors).length !== 0) {
            setFormErrors((prev) => ({ ...prev, [e.target.name]: null }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs)
            setTimeout(() => history.push('/'), 800);
        } catch (err) {
            setSubmitError(err.response.data);
        }
        setFormErrors(validate(inputs));
        setIsSubmit(true);
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

                    {resStatus !== 200 && isSubmit ? (
                        <div className={cx('ui-message_error')}>
                            <div>
                                {' '}
                                <HighlightOffIcon className={cx('ui-message_error-icon')} />
                            </div>
                            <div>{submitError}</div>
                        </div>
                    ) : null}

                    {resStatus === 200 && isSubmit ? (
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
