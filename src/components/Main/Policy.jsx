import React from 'react';
import PropTypes from 'prop-types';

const Policy = (props) => {
    return (
        <div className="policy-card">
            <div className="policy-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="policy-card__info">
                <div className="policy-card__info__name">{props.name}</div>
                <div className="policy-card__info__description">{props.description}</div>
            </div>
        </div>
    );
};

Policy.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Policy;
