import PersonElement from "./PersonElement";

const PersonList = ({persons, newSearch}) => {
    const displayedPersons = newSearch 
    ? persons.filter(person => person.name.toUpperCase().includes(newSearch.toUpperCase()))
    : persons

    return(
        <div>
        {displayedPersons.map(person =>
          <PersonElement key={person.name} name={person.name} number={person.number}/>)}
      </div>
    )
}

export default PersonList