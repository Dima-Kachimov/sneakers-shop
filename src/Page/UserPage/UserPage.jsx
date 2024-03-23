import Content from "../../components/Content/Content";
import {Link} from "react-router-dom";
import FavorArrowBack from "../../_icons/favorArrowBack/FavorArrowBack";
import CardList from "../../components/CardList/CardList";
import ButtonGreen from "../../components/UI/ButtonGreen/ButtonGreen";
import s from './UserPage.module.scss'
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import H1 from "../../components/_typography/H1/H1";

const UserPage = () => {
    return (
        <Content>
            <ContentTitle className={s.titlePage}>
                <Link to={'/'}>
                    <FavorArrowBack className={s.arrowBack}/>
                </Link>
                <H1>Мои покупки</H1>
            </ContentTitle>
                <CardList>
                </CardList>
                <Link to={'/'}>
                    <div className={s.emptyPage}>
                        <img width={70} height={70} src="./images/user/smileUser.png" alt="грустно"/>
                        <h4>У вас нет заказов</h4>
                        <p>Вы нищеброд? Оформите хотя бы один заказ.</p>
                        <ButtonGreen isBack={true}>Вернуться назад</ButtonGreen>
                    </div>
                </Link>
        </Content>
    );
};

export default UserPage;