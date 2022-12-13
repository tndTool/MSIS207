import React from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Main/Button';

const sidebar_items = [
    {
        display_name: 'Admin',
        to: '/admin',
    },
    {
        display_name: 'Employee',
        to: '/admin/employee',
    },
    {
        display_name: 'Products',
        to: '/admin/products',
    },
    {
        display_name: 'Bills',
        to: '/admin/bills',
    },
    {
        display_name: 'Account',
        to: '/admin/accounts',
    },
    {
        display_name: 'Exit',
        to: '/admin/exit',
    },
];

const Sidebar = () => {
    return (
        <div className="admin__left">
            <div className="admin__logo">
                <img
                    src="https://res.cloudinary.com/dcwka06ph/image/upload/v1669344948/Website_project/logo_mwaet4.jpg"
                    alt="Taturo's Shop"
                />
            </div>
            <div className="admin__item">
                <div className="admin__item-inner">
                    {sidebar_items.map((item) => (
                        <Link to={item.to}>
                            <Button size="block">{item.display_name}</Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
