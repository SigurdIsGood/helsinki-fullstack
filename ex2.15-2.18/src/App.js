import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import PersonList from './components/PersonList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/entries')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>add a new</h2>
      <AddPersonForm 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <PersonList persons={persons} newSearch={newSearch} />
      <div>debug: {newName} {newNumber}</div>
    </div>
  )
}

export default App