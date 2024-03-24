import ContentTitle from "../../components/ContentTitle/ContentTitle";
import H1 from "../../components/_typography/H1/H1";
import Content from "../../components/Content/Content";
import CardList from "../../components/CardList/CardList";
import Card from "../../components/Card/Card";
import ButtonGreen from "../../components/UI/ButtonGreen/ButtonGreen";
import s from './FavoritesPage.module.scss'
import {Link} from "react-router-dom";
import FavorArrowBack from "../../_icons/favorArrowBack/FavorArrowBack";
import {useContext} from "react";
import AppContext from "../../context";

const FavoritesPage = () => {
    const {dataFavorites} = useContext(AppContext)
    return (
        <Content>
            <ContentTitle className={s.titlePage}>
                <Link to={'/'}>
                    <FavorArrowBack className={s.arrowBack}/>
                </Link>
                <H1>Мои закладки</H1>
            </ContentTitle>
            {dataFavorites.length > 0 ?
                <CardList>
                    {dataFavorites.map((item)=> (
                        <Card
                            key={item.id}
                            {...item}
                        />
                    ))}
                </CardList> :
                <Link to={'/'}>
                    <div className={s.emptyPage}>
                        <img width={70} height={70} src="./images/Favorites/favorSmile.png" alt="грустно"/>
                        <h4>Закладок нет :(</h4>
                        <p>Вы ничего не добавляли в закладки</p>
                        <ButtonGreen isBack={true}>Вернуться назад</ButtonGreen>
                    </div>
                </Link>
            }
        </Content>
    );
};

export default FavoritesPage;