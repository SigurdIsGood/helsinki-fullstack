const SearchBar = ({searchValue, setSearchValue}) => {

    return (
        <>
            <input 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
       </>
    )
}

export default SearchBar