import s from './plus.module.scss'
const Plus = ({onClick}) => {

    return (
        <svg onClick={onClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.plus}>
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
            <path
                d="M20.6653 15.1312H17.2022V11.6682C17.2022 10.3328 15.1312 10.3328 15.1312 11.6682V15.1312H11.668C10.333 15.1312 10.333 17.2022 11.668 17.2022H15.1312V20.6652C15.1312 22.0005 17.2022 22.0005 17.2022 20.6652V17.2022H20.6653C22.0006 17.2022 22.0006 15.1312 20.6653 15.1312Z"
                fill="#D3D3D3"/>
        </svg>

    );
};

export default Plus;