import React from 'react';
import PropTypes from 'prop-types'; // PropTypes jest opcjonalne, ale przydatne do typowania propsów
import './Container.scss'

const Container = ({ children, className = '' }) => {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Container;
