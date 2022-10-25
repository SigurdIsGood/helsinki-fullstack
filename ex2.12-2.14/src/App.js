import { useState } from 'react'
import List from './components/List'
import SearchBar from './components/SearchBar'

const App = ({data}) => {
  
  const [searchValue, setSearchValue] = useState('')

  const toShow = searchValue 
    ? data.filter(ele => ele.name.common.toUpperCase().includes(searchValue.toUpperCase())) 
    : []

  return (
  <>
    <div>find countries</div>
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
    <List toShow={toShow} setSearchValue={setSearchValue}/>
  </>
  )
}

export default App