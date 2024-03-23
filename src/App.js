import './_styles/global/global.scss'
import Header from './components/Header/Header'
import Drawer from "./components/Drawer/Drawer";
import {useState, useEffect} from "react";
import {bodyHidden} from './js/main'
import axios from 'axios'
import HomePage from "./Page/HomePage/HomePage";
import {Routes, Route} from 'react-router-dom'
import FavoritesPage from "./Page/FavoritesPage/FavoritesPage";
import UserPage from "./Page/UserPage/UserPage";


function App() {

    const [dataSneakers, setDataSneakers] = useState([])
    const [dataSneakersCart, setDataSneakersCart] = useState([])
    const [dataFavorites, setDataFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    bodyHidden(isDrawerOpen)
    const handleIsDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const addToCart = async (itemCart) => {
        try {
            const cartItem = dataSneakersCart.find((item) => item.anchor === itemCart.anchor)
            if(cartItem){
                await axios.delete(`https://65f435dff54db27bc020ee8f.mockapi.io/cart/${cartItem.id}`)
                setDataSneakersCart(prev => prev.filter(item => item.anchor !== itemCart.anchor))
                setDataSneakers(prev => [...prev])
            } else {
                const {data} = await axios.post('https://65f435dff54db27bc020ee8f.mockapi.io/cart', itemCart)
                setDataSneakersCart((prev) => [data, ...prev])
            }
        } catch(e) {
            console.log(e)
        }
    }

    const addToFavorites = async (itemFavor) => {
        try {
            const favoriteItem = dataFavorites.find((item) => item.anchor === itemFavor.anchor)
            if(favoriteItem){
                await axios.delete(`https://65f6f6fcb4f842e80884e0cb.mockapi.io/favorites/${favoriteItem.id}`)
                setDataFavorites((prev) => prev.filter(item => item.anchor !== itemFavor.anchor))
            } else {
                const {data} = await axios.post('https://65f6f6fcb4f842e80884e0cb.mockapi.io/favorites', itemFavor)
                setDataFavorites(prev => [data, ...prev])
            }
        } catch (e) {
            console.log(e)
        }
    }
    const getIdItemCart = async (set) => {
        set(false)
    }

    useEffect(() => {
        async function fetchData () {
            const {data: resAllItems} = await axios.get('https://65f435dff54db27bc020ee8f.mockapi.io/cart')
            const {data: resFavorites} = await axios.get('https://65f6f6fcb4f842e80884e0cb.mockapi.io/favorites')
            const {data: resCart} = await axios.get('https://65f435dff54db27bc020ee8f.mockapi.io/items')
            setIsLoading(false)
            setDataSneakersCart(resAllItems)
            setDataFavorites(resFavorites)
            setDataSneakers(resCart)
        }
        fetchData().then()
    }, [])
    return (
            <div className="app">
                {isDrawerOpen && <Drawer
                    handleIsDrawerOpen={handleIsDrawerOpen}
                    dataSneakersCart={dataSneakersCart}
                    addToCart={addToCart}
                    getIdItemCart={getIdItemCart}
                />}
                <div className="container">
                    <Header handleIsDrawerOpen={handleIsDrawerOpen}/>
                        <Routes>
                            <Route path='/' element={
                                <HomePage
                                    addToCart={addToCart}
                                    addToFavorites={addToFavorites}
                                    searchValue={searchValue}
                                    dataSneakers={dataSneakers}
                                    setSearchValue={setSearchValue}
                                    dataFavorites={dataFavorites}
                                    dataSneakersCart={dataSneakersCart}
                                    isLoading={isLoading}
                                />
                            }/>
                            <Route path='/favorites' element={
                                <FavoritesPage
                                    dataFavorites={dataFavorites}
                                    addToCart={addToCart}
                                    addToFavorites={addToFavorites}
                                />
                            }/>
                            <Route path='/user' element={
                                <UserPage
                                    dataFavorites={dataFavorites}
                                    addToCart={addToCart}
                                    addToFavorites={addToFavorites}
                                />
                        }/>
                    </Routes>
                </div>
            </div>
    )
}
export default App