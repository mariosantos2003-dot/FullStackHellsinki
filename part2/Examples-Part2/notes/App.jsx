//Importamos el componente note que hemos movido a otro archivo
import Note from "./Note";


//Creamos el componente con los props del main,como solo necesitamos las notes
const App = ({notes}) => {
  


  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/*Recorremos el array de objetos notes y mostramos el contenido de cada uno de ellos*/}
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>

      {/*Para hacerlo de manera mas practica, se utiliza el map*/}
      <ul>
        {/* Es necesario añadir el key para que se muestren los atributos */},
        {notes.map((note) => 
        <Note key={note.id} note={note} />
          
        )}
      </ul>
    </div>
  );
};
