import s from './content_title.module.scss'
const ContentTitle = ({children, className}) => {
    return (
        <div className={`${s.ContentTitle}, ${className}`}>
            {children}
        </div>
    );
};

export default ContentTitle;