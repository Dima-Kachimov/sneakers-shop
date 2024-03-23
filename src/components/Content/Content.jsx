import s from './content.module.scss'

const Content = ({children}) => {
    return (
        <div className={s.content}>
            {children}
        </div>
    );
};

export default Content;