import { useContext } from 'react'
import AppContext from '../context'

export const useCart = () => {
    const { dataSneakersCart } = useContext(AppContext)
    const totalPrice = dataSneakersCart.reduce(
        (acc, item) => acc + item.price,
        0
    )
    return [totalPrice]
}