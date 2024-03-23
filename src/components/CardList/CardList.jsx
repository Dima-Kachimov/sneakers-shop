import s from './cardList.module.scss'
const CardList = ({children}) => {
    return (
        <div className={s.cardList}>
            {children}
        </div>
    );
};

export default CardList;