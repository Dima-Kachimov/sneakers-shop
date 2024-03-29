import './_styles/global/global.scss'

import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import HomePage from './Page/HomePage/HomePage'
import FavoritesPage from './Page/FavoritesPage/FavoritesPage'
import UserPage from './Page/UserPage/UserPage'

import axios from 'axios'
import AppContext from './context'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { bodyHidden } from './main'

function App() {
    const [dataSneakers, setDataSneakers] = useState([])
    const [dataSneakersCart, setDataSneakersCart] = useState([])
    const [dataFavorites, setDataFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [dataOrders, setDataOrders] = useState([])

    const portal = document.getElementById('portal')

    bodyHidden(isDrawerOpen)
    const handleIsDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const addToCart = async (itemCart) => {
        try {
            const cartItem = dataSneakersCart.find(
                (item) => item.anchor === itemCart.anchor
            )
            if (cartItem) {
                await axios.delete(
                    `https://65f435dff54db27bc020ee8f.mockapi.io/cart/${cartItem.id}`
                )
                setDataSneakersCart((prev) =>
                    prev.filter((item) => item.anchor !== itemCart.anchor)
                )
                setDataSneakers((prev) => [...prev])
            } else {
                const { data } = await axios.post(
                    'https://65f435dff54db27bc020ee8f.mockapi.io/cart',
                    itemCart
                )
                setDataSneakersCart((prev) => [data, ...prev])
            }
        } catch (e) {
            console.log(e)
        }
    }

    const addToFavorites = async (itemFavor) => {
        try {
            const favoriteItem = dataFavorites.find(
                (item) => item.anchor === itemFavor.anchor
            )
            if (favoriteItem) {
                await axios.delete(
                    `https://65f6f6fcb4f842e80884e0cb.mockapi.io/favorites/${favoriteItem.id}`
                )
                setDataFavorites((prev) =>
                    prev.filter((item) => item.anchor !== itemFavor.anchor)
                )
            } else {
                const { data } = await axios.post(
                    'https://65f6f6fcb4f842e80884e0cb.mockapi.io/favorites',
                    itemFavor
                )
                setDataFavorites((prev) => [data, ...prev])
            }
        } catch (e) {
            console.log(e)
        }
    }

    const hasCartItems = (anchor) => {
        return dataSneakersCart.find((obj) => obj.anchor === anchor)
    }

    const hasFavoriteItems = (anchor) => {
        return dataFavorites.some((obj) => obj.anchor === anchor)
    }

    useEffect(() => {
        try {
            async function fetchData() {
                const [
                    resCart,
                    resFavorites,
                    resAllItems,
                    resOrders] = await Promise.all(
                        [
                            axios.get('https://65f435dff54db27bc020ee8f.mockapi.io/cart'),
                            axios.get('https://65f6f6fcb4f842e80884e0cb.mockapi.io/favorites'),
                            axios.get('https://65f435dff54db27bc020ee8f.mockapi.io/items'),
                            axios.get('https://65f6f6fcb4f842e80884e0cb.mockapi.io/orders')
                        ])
                setIsLoading(false)
                setDataSneakersCart(resCart.data)
                setDataFavorites(resFavorites.data)
                setDataSneakers(resAllItems.data)
                setDataOrders(resOrders.data.map((order) => order.items).flat())
            }
            fetchData().then()
        } catch (e) {
            alert(`Оштбка при запросе страницы`)
        }
    }, [])

    return (
        <AppContext.Provider
            value={{
                dataSneakers,
                dataSneakersCart,
                dataFavorites,
                dataOrders,
                searchValue,
                isLoading,
                isDrawerOpen,
                hasCartItems,
                hasFavoriteItems,
                addToFavorites,
                addToCart,
                handleIsDrawerOpen,
                setSearchValue,
                setDataSneakersCart,
                setDataOrders,
            }}
        >
            <div className="app">
                {ReactDOM.createPortal(<Drawer />, portal)}
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/user" element={<UserPage />} />
                    </Routes>
                </div>
            </div>
        </AppContext.Provider>
    )
}
export default App
