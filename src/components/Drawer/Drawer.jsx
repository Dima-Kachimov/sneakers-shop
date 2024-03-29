import s from './draver.module.scss'

import ButtonGreen from '../UI/ButtonGreen/ButtonGreen'
import CartItemClose from '../../_icons/cart/CartItemClose'
import Card from '../Card/Card'

import { useContext, useState } from 'react'
import AppContext from '../../context'
import Info from '../Info/Info'
import axios from 'axios'
import { useCart } from '../../hooks/useCart'

const Drawer = () => {
    const {
        dataSneakersCart,
        handleIsDrawerOpen,
        setDataSneakersCart,
        setDataOrders,
        isDrawerOpen
    } = useContext(AppContext)

    const [totalPrice] = useCart()

    const [isOrder, setIsOrder] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [orderId, setOrderId] = useState(0)

    const drawerClose = () => {
        handleIsDrawerOpen()
        setIsOrder(false)
    }

    const handleIsOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://65f6f6fcb4f842e80884e0cb.mockapi.io/orders', {items: dataSneakersCart, })
            setOrderId(data.id)
            setDataSneakersCart([])
            setDataOrders(prev => [...prev, data.items].flat())
            setIsOrder(true)

            for (let i = 0; i < dataSneakersCart.length; i++) {
                await axios.delete(`https://65f435dff54db27bc020ee8f.mockapi.io/cart/${dataSneakersCart[i].id}`)
            }
        } catch (e) {
            alert(`Ошибка при создании заказа: ${e}`)
        }
        setIsLoading(false)
    }

    return (
        <div className={`${s.overlay} ${isDrawerOpen ? s.visible : ''}`} onClick={drawerClose}>
            <div className={`${s.drawer} ${isDrawerOpen ? s.visibleDrawer : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className={s.cartTitle}>
                    <h2>Корзина</h2>
                    <CartItemClose key={1} onClick={drawerClose} />
                </div>
                {dataSneakersCart.length > 0 ? (
                    <>
                        <div className={s.cardList}>
                            {
                                dataSneakersCart.map((item) => (
                                    <Card key={item.id} {...item} isViewCart={true} />
                                ))
                            }
                        </div>
                        <div className={s.priceBlock}>
                            <div className={s.total}>
                                <h5>Итого:</h5>
                                <div className={s.dashed}></div>
                                <div className={s.sum}>{totalPrice} $</div>
                            </div>
                            <div className={s.total}>
                                <h5>Налог 5%: </h5>
                                <div className={s.dashed}></div>
                                <div className={s.sum}>
                                    {Math.round(totalPrice * 0.05)} $
                                </div>
                            </div>
                        </div>
                        <ButtonGreen disabled={isLoading} isBack={false} onClick={handleIsOrder}>
                            Оформить заказ
                        </ButtonGreen>
                    </>
                ) : (
                    <Info
                        title={isOrder ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={
                            isOrder
                                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                        }
                        iconUrl={
                            isOrder
                                ? './images/cart/order.svg'
                                : './images/cart/cartImg.png'
                        }
                        alt="Empty"
                        isBack={true}
                        drawerClose={drawerClose}
                    />
                )}
            </div>
        </div>
    )
}

export default Drawer
