import s from './h1.module.scss'

const H1 = ({children}) => {
    return (
        <h1 className={s.title}>{children}</h1>
    );
};

export default H1;