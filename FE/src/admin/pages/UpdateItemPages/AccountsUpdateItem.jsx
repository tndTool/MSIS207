import React from 'react';

import Sidebar from '~/admin/components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';
import Button from '~/components/Main/Button';

const AccountsUpdateItem = () => {
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">Update Account</div>
                        <div className="checkout__left__box">
                            <div className="checkout__left__box__main">
                                <div className="checkout__left__box__main__left">
                                    <label for="username">Username*</label>
                                    <input type="text" name="username" />

                                    <label for="email">Email*</label>
                                    <input type="text" name="email" />
                                </div>
                                <div className="checkout__left__box__main__right">
                                    <label for="password">Password*</label>
                                    <input type="password" name="password" />

                                    <label for="password">Confirm Password*</label>
                                    <input type="password" name="password" />
                                </div>
                            </div>
                            <label for="Role">Role*</label>
                            <select name="role">
                                <option value="0">Admin</option>
                                <option value="1">User</option>
                            </select>
                            <Button primary>Lưu thay đổi</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default AccountsUpdateItem;
