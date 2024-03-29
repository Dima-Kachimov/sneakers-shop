import s from './card.module.scss'

import Plus from "../../_icons/card/Plus";
import PlusActive from "../../_icons/card/PlusActive";
import FavoritesCard from "../../_icons/card/FavoritesCard";
import FavoritesCardActive from "../../_icons/card/FavoritesCardActive";
import CartItemClose from "../../_icons/cart/CartItemClose";

import {useContext} from "react";
import ContentLoader from "react-content-loader"
import AppContext from "../../context";


const Card = ({name, price, imgUrl, id, anchor, isViewCart, hasOrder = true}) => {
    const {hasCartItems, hasFavoriteItems, addToCart, addToFavorites, isLoading} = useContext(AppContext)


    const handleIsSetFavorite = () => addToFavorites({name, price, imgUrl, anchor, id})
    const handleIsSetCart = () => addToCart({name, price, imgUrl, anchor})



    if(isViewCart) {
        return (
            <div className={s.cartItem}>
                <img width={70} height={70} src={imgUrl} alt="sneakers"/>
                <div className={s.content}>
                    <h3>{name}</h3>
                    <strong>{price} руб.</strong>
                </div>
                <CartItemClose className={s.cartClose} onClick={handleIsSetCart}/>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className={s.card}>
                <ContentLoader
                    speed={4}
                    width={150}
                    height={210}
                    viewBox="0 0 150 210"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="105" />
                    <rect x="0" y="115" rx="5" ry="5" width="150" height="16" />
                    <rect x="0" y="138" rx="5" ry="5" width="93" height="20" />
                    <rect x="0" y="178" rx="5" ry="5" width="80" height="32" />
                    <rect x="118" y="178" rx="5" ry="5" width="32" height="32" />
                </ContentLoader>
            </div>
        )
    }

    return (
        <div className={s.card}>
            {hasFavoriteItems(anchor)
                ? <FavoritesCardActive className={s.favor} onClick={handleIsSetFavorite}/>
                : <FavoritesCard className={s.favor} onClick={handleIsSetFavorite}/>}
            <img width={133} height={112} src={imgUrl} alt="sneakers"/>
            <h3>{name}</h3>
            <div className={s.priceBlock}>
                <div className={s.price}>
                    <span>Цена:</span>
                    <strong>{price} $</strong>
                </div>
                {hasCartItems(anchor)
                    ? <PlusActive onClick={() => handleIsSetCart()}/>
                    : hasOrder &&  <Plus onClick={() => handleIsSetCart()}/>}
            </div>
        </div>
    );
};

export default Card;