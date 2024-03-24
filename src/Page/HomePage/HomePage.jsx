import CardList from "../../components/CardList/CardList";
import Card from "../../components/Card/Card";
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import H1 from "../../components/_typography/H1/H1";
import Search from "../../components/Search/Search";
import Content from "../../components/Content/Content";
import s from './HomePage.module.scss'
import {useContext} from "react";
import AppContext from "../../context";

const HomePage = () => {
    const {searchValue, dataSneakers, isLoading} = useContext(AppContext)
    return (
        <Content>
            <ContentTitle className={s.titlePage}>
                <H1>
                    {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
                </H1>
                <Search/>
            </ContentTitle>
            <CardList>
                {isLoading
                    ? [...Array(8)].map((_, i) => <Card key={i} isLoading/>)
                    : dataSneakers
                        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                            <Card
                                key={item.id}
                                {...item}
                            />
                        ))}
            </CardList>
        </Content>
    );
};

export default HomePage;