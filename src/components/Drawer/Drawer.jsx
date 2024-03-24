import s from './draver.module.scss'

import ButtonGreen from "../UI/ButtonGreen/ButtonGreen";
import CartItemClose from "../../_icons/cart/CartItemClose";
import Card from "../Card/Card";

import {useContext} from "react";
import AppContext from "../../context";

const Drawer = () => {
    const {dataSneakersCart, handleIsDrawerOpen} = useContext(AppContext)

    const renderItemsCart = () => {
        return dataSneakersCart.map(item => (
            <Card
                key={item.id}
                {...item}
                isViewCart={true}
            />))
    }

    return (
        <div className={s.overlay} onClick={handleIsDrawerOpen}>
            <div className={s.drawer} onClick={(e) => e.stopPropagation()}>
                <div className={s.cartTitle}>
                    <h2>Корзина</h2>
                    <CartItemClose key={1} onClick={handleIsDrawerOpen}/>
                </div>
                {dataSneakersCart.length > 0
                        ? <>
                            <div className={s.cardList}>
                                {renderItemsCart()}
                            </div>
                            <div className={s.priceBlock}>
                                <div className={s.total}>
                                    <h5>Итого:</h5>
                                    <div className={s.dashed}></div>
                                    <div className={s.sum}>21 498 руб.</div>
                                </div>
                                <div className={s.total}>
                                    <h5>Налог 5%: </h5>
                                    <div className={s.dashed}></div>
                                    <div className={s.sum}>1074 руб.</div>
                                </div>
                            </div>
                            <ButtonGreen isBack={false}>Оформить заказ</ButtonGreen>
                        </>
                        : <div className={s.cartEmpty}>
                            <img src="./images/cart/cartImg.png" alt="Empty"/>
                            <h3>Корзина пустая</h3>
                            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <ButtonGreen isBack={true} onClick={handleIsDrawerOpen}>Вернуться к покупкам</ButtonGreen>
                        </div>
                }
            </div>
        </div>
    )
        ;
};

export default Drawer;