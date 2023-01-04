import React, { useState } from 'react';

import Sidebar from '~/admin/components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../../action/employeeAction';

const EmployeeAddItem = () => {

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        dispatch(addEmployee({name, gender, birthday, email, phone, address}))
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
                                    <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>

                                    <label for="gender">Gender*</label>
                                    <select name="gender" onClick={(e) => setGender(e.target.selectedOptions[0].text)}>
                                        <option value="0">Chọn</option>
                                        <option value="0">Male</option>
                                        <option value="1">Female</option>
                                    </select>

                                    <label for="birthday">Birthday*</label>
                                    <input type="text" name="birthday" onChange={(e) => setBirthday(e.target.value)}/>
                                </div>

                                <div className="checkout__left__box__main__right">
                                    <label for="phone">Phone*</label>
                                    <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)}/>

                                    <label for="email">Email*</label>
                                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>

                                    <label for="address">Address*</label>
                                    <input type="text" name="address" onChange={(e) => setAddress(e.target.value)}/>
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
