import React from 'react';

const ButtonArrowLeft = ({className}) => {
    return (
            <svg className={className} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7144 7L1.00007 7" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7.00006 13L1.00006 7L7.00006 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
    );
};

export default ButtonArrowLeft;