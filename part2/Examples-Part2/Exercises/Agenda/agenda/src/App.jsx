import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [message, setMessage] = useState(''); // Estado para el mensaje

  const addNumber = (event) => {
    event.preventDefault();

    // Comprobar si el nombre ya existe
    if (persons.some((person) => person.name === newName)) {
      alert(`El nombre "${newName}" ya existe en la agenda.`);
      return;

    }

    const numberObject = {
      name: newName,
      id: persons.length + 1,
    };

    setPersons(persons.concat(numberObject));
    setNewName('');
    setMessage(''); // Limpiar el mensaje si se añade correctamente
  };

  const handleNumberChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <input value={newName} onChange={handleNumberChange} />
        <button type="submit">Add Note</button>
      </form>
      {message && <p style={{ color: 'red' }}>{message}</p>} {/* Mostrar mensaje */}
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
