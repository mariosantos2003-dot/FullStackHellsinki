import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) =>{
    event.preventDefault();
    const numberObject = {
      name :newName,
      id :persons.length + 1,

    }
    setPersons(persons.concat(numberObject));
    setNewName("");

  }
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <input value={newName} onChange={handleNumberChange} />
        <button type="submit">Add Note</button>
      </form>
      <h2>Numbers</h2>
      <p>
        <ul>
          {persons.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </p>
    </div>
  )
}

export default App