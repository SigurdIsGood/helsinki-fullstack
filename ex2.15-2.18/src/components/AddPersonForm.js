const AddPersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const alreadyOnPersons = persons.reduce(
          (test,person) => {
            return test = (person.name === newName)
          },false)
    
    
        if (alreadyOnPersons === true) {
          alert(`${newName} is already added to phonebook`)
        } else {
          setPersons(persons.concat({name: newName, number: newNumber}))
        }
        setNewName('')
      }

    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input 
            id="name-input"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number: <input 
            id="number-input"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default AddPersonForm