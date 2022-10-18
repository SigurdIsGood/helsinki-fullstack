import DetailedInfo from "./DetailedInfo"

const List = ({toShow, setSearchValue}) => {
    
    if (toShow.length === 1) {
        return <DetailedInfo country={toShow[0]}/>
    } else if (toShow.length <= 10) {
        return(
            <ul>
                {toShow.map((ele) => {
                    return (<li key={ele.name.common}>{ele.name.common}
                        <button onClick={() => setSearchValue(ele.name.common)}>show</button></li>)
                })}
            </ul>
        )
    } else if (toShow.length > 10) {
        return (<p>Too many results, search for a more specific term</p>)
    }
}

export default List