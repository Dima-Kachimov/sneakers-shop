import React from 'react';

const CartItemClose = ({className, handleIsDrawerOpen, onClick}) => {
    return (
        <svg onClick={onClick} className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
            <path
                d="M20.0798 18.6155L17.631 16.1667L20.0798 13.718C21.024 12.7737 19.5596 11.3093 18.6153 12.2536L16.1666 14.7023L13.7178 12.2535C12.7738 11.3094 11.3094 12.7738 12.2534 13.7178L14.7022 16.1667L12.2535 18.6154C11.3093 19.5596 12.7737 21.024 13.7179 20.0798L16.1667 17.6311L18.6155 20.0799C19.5596 21.024 21.024 19.5597 20.0798 18.6155Z"
                fill="#B5B5B5"/>
        </svg>

    );
};

export default CartItemClose;