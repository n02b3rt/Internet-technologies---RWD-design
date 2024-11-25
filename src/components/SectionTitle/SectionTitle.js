import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.scss'

const SectionTitle = ({className = '', titlePart1, titlePart2 }) => {
    return (
       <h2 className={`section-title ${className}`}>
           <span className={'section-title--1'}>{titlePart1}</span>
           <br/>
           <span className={'section-title--2'}>{titlePart2}</span>
       </h2>
    );
};

SectionTitle.propTypes = {
    className: PropTypes.string
};

export default SectionTitle;
