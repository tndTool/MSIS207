import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const size = props.size ? 'btn-' + props.size : '';

    const animate = props.animate ? 'btn-animate' : '';

    return (
        <button className={`btn ${size} ${animate}`} onClick={props.onClick ? () => props.onClick() : null}>
            <span className="btn__txt">{props.children}</span>
            {props.icon ? (
                <span className="btn__icon">
                    <i className={`${props.icon} bx-tada`}></i>
                </span>
            ) : null}
        </button>
    );
};

Button.propTypes = {
    size: PropTypes.string,
    icon: PropTypes.string,
    animate: PropTypes.bool,
    onclick: PropTypes.func,
};
// Hello testing
export default Button;
