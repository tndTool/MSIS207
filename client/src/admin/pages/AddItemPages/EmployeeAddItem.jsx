import React, { useState } from 'react';

import Sidebar from '~/admin/components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../../action/employeeAction';

const EmployeeAddItem = () => {

    const [inputs, setInputs] = useState({});

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
    }
    
    const handleSubmit = () => {
        dispatch(addEmployee(inputs))
    }

    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">Insert Employee</div>
                        <div className="checkout__left__box">
                            <div className="checkout__left__box__main">
                                <div className="checkout__left__box__main__left">
                                    <label for="name">Name*</label>
                                    <input type="text" name="name" onChange={handleChange}/>

                                    <label for="gender">Gender*</label>
                                    <select name="gender" onClick={handleChange}>
                                        <option value="">Chọn</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>

                                    <label for="birthday">Birthday*</label>
                                    <input type="text" name="birthday" onChange={handleChange}/>
                                </div>

                                <div className="checkout__left__box__main__right">
                                    <label for="phone">Phone*</label>
                                    <input type="text" name="phone" onChange={handleChange}/>

                                    <label for="email">Email*</label>
                                    <input type="text" name="email" onChange={handleChange}/>

                                    <label for="address">Address*</label>
                                    <input type="text" name="address" onChange={handleChange}/>
                                </div>
                            </div>
                            <Button onClick={handleSubmit}primary>Lưu thay đổi</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default EmployeeAddItem;
