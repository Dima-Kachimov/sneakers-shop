import Logo from '../../_icons/header/Logo'
import Basket from '../../_icons/header/Basket'
import Favorite from '../../_icons/header/Favorite'
import User from '../../_icons/header/User'

import s from './header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={s.logo_desc}>
                <Logo />
                <div className={s.desc}>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={s.nav}>
                <li>
                    <Basket />
                    <span className={s.li_strong}>1205 руб.</span>
                </li>
                <li>
                    <Favorite />
                    <span>Закладки</span>
                </li>
                <li>
                    <User />
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    )
}

export default Header
