import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Helmet = (props) => {
    document.title = "Taturo's Shop - " + props.title;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div>{props.children}</div>;
};

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Helmet;
