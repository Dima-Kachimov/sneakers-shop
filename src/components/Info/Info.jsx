import React, {useContext} from 'react';
import s from "./Info.module.scss";
import ButtonGreen from "../UI/ButtonGreen/ButtonGreen";
import AppContext from "../../context";

const Info = ({title, description, isBack, iconUrl, drawerClose}) => {
    const {handleIsDrawerOpen} = useContext(AppContext)
    return (
        <div className={s.cartEmpty}>
            <img src={iconUrl} alt="cart"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <ButtonGreen isBack={isBack} onClick={() => {
                handleIsDrawerOpen()
                drawerClose()
            }}>Вернуться к покупкам</ButtonGreen>
        </div>
    );
};

export default Info;