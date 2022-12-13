import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Register.module.scss';
import request from '~/utils/request';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function Register() {
    const cx = classNames.bind(styles);

    const [inputs, setInputs] = useState({
      username:"",
      email:"",
      password:"",
      re_password:""
    })

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [submitError, setSubmitError] = useState();
    const [status, setStatus] = useState();
    
    const history = useHistory();


    const handleChange = e => {
      setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
      // remove error below input if key change
      if(e.target.value !== 0 && Object.keys(formErrors).length !== 0){
      setFormErrors(prev=>({...prev, [e.target.name]: null}))
      }
    };
    const handleSubmit = async e => {
        
      e.preventDefault();
      // if register succes run 'try' without run 'catch'
      try {
        const res = await request.post("/auth/register", inputs);
        setStatus(res.status);
        setTimeout(() => history.push("/login"), 1000);

      } catch (err) {
        setSubmitError(err.response.data);
      }
      setFormErrors(validate(inputs));
      setIsSubmit(true);

    };

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        const regexUsername = /^[a-zA-Z0-9]{3,20}$/;
        // error below input
        if (!values.username) {
            errors.username = "Enter your username"
        } else if (!regexUsername.test(values.username)){
            errors.username = "Username should be 3-20 characters and shouldn't include any specical character";
        }
        if (!values.email) {
            errors.email = "Enter your email";
        } else if (!regexEmail.test(values.email)){
            errors.email = "Invalid email address. Please correct and try again.";
        }
        if (!values.password){
            errors.password = "Enter your password";
        } else if (values.password.length < 6) {
            errors.password = "Minimum 6 characters required";
        }
        if (!values.re_password && values.password){
            errors.re_password = "Type your password again";
        }

        return errors;
    }


    return (
        <div className={cx('container')}>
            <div className={cx('box')}>
                <div className={cx('form-register')}>
                    <h2>REGISTER</h2>

            {status !== 200 && isSubmit ? 
            (<div className={cx('ui-message_error')}>
                <div> <HighlightOffIcon className={cx('ui-message_error-icon')}/></div>
                <div>{submitError}</div>
            </div>): 
            (null)}

            { status === 200 && isSubmit ? 
            (<div className={cx('ui-message_success')}>
                <div> <CheckCircleOutlineIcon className={cx('ui-message_success-icon')}/></div>
                <div>User created successfully, please login</div>
            </div>): 
            (null)}
                    <div className={cx('form-register__inputBox')}>
                        <input type="text" required="required" name="username" onChange={handleChange} />
                        <span>Username </span>
                        <i></i>
                    </div>
                    <p>{formErrors.username}</p>

                    <div className={cx('form-register__inputBox')}>
                        <input type="text" required="required" name="email" onChange={handleChange}/>
                        <span>Email </span>
                        <i></i>
                    </div>
                    <p>{formErrors.email}</p>

                    <div className={cx('form-register__inputBox')}>
                        <input type="password" required="required" name="password" onChange={handleChange}/>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <p>{formErrors.password}</p>

                    <div className={cx('form-register__inputBox')}>
                        <input type="password" required="required" name="re_password" onChange={handleChange}/>
                        <span>Re-password</span>
                        <i></i>
                    </div>
                    <p>{formErrors.re_password}</p>

                    <div className={cx('form-register__links')}>
                        <Link to="/login">
                            <span>LOGIN</span>
                        </Link>
                    </div>

                    <div className={cx('form-register__btn')}>
                            <span onClick={handleSubmit}>SIGN UP</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;
