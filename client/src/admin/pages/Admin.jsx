import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';


const Admin = () => {
    return (
        <Helmet title="Admin">
            <div className="admin-container">
                <div className="admin-header__title">
                    <h2>Admin</h2>
                </div>
                <div className="admin">
                    <Sidebar />
                    <div className="admin__right">
                        <div className="admin__right__title">HI ĐÂY LÀ TRANG ADMIN NÈ, KKK ^ ^</div>
                        <h2 className="fun">Chúng mình sẽ nâng cấp thêm trong tương lai! ^ ^</h2>
                        <div className="admin__right__image">
                            <img
                                src="https://res.cloudinary.com/dcwka06ph/image/upload/v1670681971/Website_project/z3949810954286_7ba89f8256157072ec162eedcd3782f2_ir9lxq.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Admin;
