import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Helmet from '~/components/Main/Helmet';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft, faHandPointRight } from '@fortawesome/free-regular-svg-icons';

const Exit = () => {

    const handleSubmit = () => {
        localStorage.removeItem('userInfo');
        window.location.href = '/login';
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
                        <div className="admin__right__title">Exit</div>
                        <div className="profile__right__logout">
                            <p>
                                Are you sure you want to sign out?
                                <Link>
                                    <span>
                                        <span>
                                            <FontAwesomeIcon icon={faHandPointRight} />
                                        </span>
                                        <span onClick={handleSubmit}>Confirm and Logout</span>
                                        <span>
                                            <FontAwesomeIcon icon={faHandPointLeft} />
                                        </span>
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Exit;
