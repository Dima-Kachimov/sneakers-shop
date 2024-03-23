import Logo from '../../_icons/header/Logo'
import Basket from '../../_icons/header/Basket'
import Favorite from '../../_icons/header/Favorite'
import User from '../../_icons/header/User'
import s from './header.module.scss'
import {Link} from "react-router-dom";

const liItem = [
    {id: 1, icon: <Basket/>, title: '1205 руб.'},
    {id: 2, icon: <Favorite/>, title: 'Закладки',},
    {id: 3, icon: <User/>, title: 'Профиль'}
]

const Header = ({handleIsDrawerOpen}) => {
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
                    {liItem.map((item) => (
                        <li key={item.id}>
                            {item.icon}
                            {item.id === 1
                                ? <span className={s.li_strong} onClick={handleIsDrawerOpen}>{item.title}</span>
                                : <Link to={item.id === 2 ? 'favorites' : 'user'}><span>{item.title}</span></Link>}
                        </li>
                    ))}
                </ul>

            </header>
            <div className={s.decorLine}/>
        </>
    )
}

export default Header
