import s from './header.module.scss'

import Logo from '../../_icons/header/Logo'
import Basket from '../../_icons/header/Basket'
import Favorite from '../../_icons/header/Favorite'
import User from '../../_icons/header/User'

import {Link} from "react-router-dom";
import {useContext} from "react";
import AppContext from "../../context";

const Header = () => {
    const {handleIsDrawerOpen} = useContext(AppContext)
    return (
        <>
            <header>
                <div className={s.logo_desc}>
                    <Link to={'/'}>
                        <Logo/>
                        <div className={s.desc}>
                            <h3>REACT SNEAKERS</h3>
                            <p>Магазин лучших кроссовок</p>
                        </div>
                    </Link>
                </div>
                <ul className={s.nav}>
                    <li>
                        <Basket/>
                        <span className={s.li_strong} onClick={handleIsDrawerOpen}>1205 руб.</span>
                    </li>
                    <li>
                        <Favorite/>
                        <Link to={'favorites'}><span>Закладки</span></Link>
                    </li>
                    <li>
                        <User/>
                        <Link to={'user'}><span>Профиль</span></Link>
                    </li>
                </ul>

            </header>
            <div className={s.decorLine}/>
        </>
    )
}

export default Header
