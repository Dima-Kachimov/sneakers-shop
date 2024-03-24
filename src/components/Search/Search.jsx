import s from './Search.module.scss'

import SearchIcon from "../../_icons/search/SearchIcon";
import CartItemClose from "../../_icons/search/CartItemClose";

import {useContext} from "react";
import AppContext from "../../context";

const Search = () => {
    const {searchValue, setSearchValue} = useContext(AppContext)

    return (
        <div className={s.search}>
            <SearchIcon/>
            <input
                type='text'
                placeholder='Поиск...'
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}/>
            {searchValue && <CartItemClose onClick={() => setSearchValue('')} className={s.delete}/>}
        </div>
    );
};

export default Search;