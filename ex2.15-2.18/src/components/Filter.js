const Filter = ({newSearch, setNewSearch}) => {
    return (
        <div>
        filter shown with <input 
          id="filter-input"
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
        />
      </div>
    )
}

export default Filter