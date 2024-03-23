import s from './Search.module.scss'
import SearchIcon from "../../_icons/search/SearchIcon";
import CartItemClose from "../../_icons/search/CartItemClose";
const Search = ({searchValue, setSearchValue}) => {
    const handleSearchValue = (e) => {
        setSearchValue(e.target.value)
    }
    const handleDeleteInput = () => {
        setSearchValue('')
    }
    return (
        <div className={s.search}>
            <SearchIcon/>
            <input type='text' placeholder='Поиск...' onChange={handleSearchValue} value={searchValue}/>
            {searchValue && <CartItemClose onClick={handleDeleteInput} className={s.delete}/>}
        </div>
    );
};

export default Search;