import React from 'react';

const ButtonGreenArrow = ({className,}) => {
    return (
        <svg className={className} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.7143 1L14.7143 7L8.7143 13" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    );
};

export default ButtonGreenArrow;