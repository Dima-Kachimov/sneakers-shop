import CardList from "../../components/CardList/CardList";
import Card from "../../components/Card/Card";
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import H1 from "../../components/_typography/H1/H1";
import Search from "../../components/Search/Search";
import Content from "../../components/Content/Content";
import s from './HomePage.module.scss'

const HomePage = ({dataSneakers, searchValue, addToCart, addToFavorites, setSearchValue, dataFavorites, dataSneakersCart, isLoading}) => {
    return (
        <Content>
            <ContentTitle className={s.titlePage}>
                <H1>
                    {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
                </H1>
                <Search
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                />
            </ContentTitle>
            <CardList>
                {isLoading
                    ? [...Array(8)].map((_, i) => <Card key={i} isLoading/>)
                    : dataSneakers
                        .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                            <Card
                                key={item.id}
                                id={item.id}
                                anchor={item.anchor}
                                isFavor={dataFavorites.some((obj) => obj.anchor === item.anchor)}
                                isCart={dataSneakersCart.find((obj) => obj.anchor === item.anchor)}
                                name={item.name}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                addToCart={addToCart}
                                addToFavorites={addToFavorites}
                            />
                        ))}
            </CardList>
        </Content>
    );
};

export default HomePage;