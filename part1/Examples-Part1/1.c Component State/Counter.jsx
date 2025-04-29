//Re-renderizado de la pagina
import { useState } from "react";

const App = () => {
  //Definimos el estado del contador
  const [counter, setCounter] = useState(0);

  //Creamos la funcion para que nos notifique cada vez que hagamos click
  const handleClick = () => {
    console.log("Click");
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  //Esta funcion se encarga de resetear el contador a 0
  const setToZero = () => setCounter(0);

  //Esta funcion se encarga de incrementar el contador en 1
  const increment = () => setCounter(counter + 1);

  setTimeout(
    //Definimos la funcion que se ejecutara cada segundo
    //Esta funcion se encarga de sumar 1 al contador
    () => setCounter(counter + 1),
    1000
  );

  return (
    <div>
      <div>{counter}</div>

      <Display counter={counter} />
      {/*Si hacemos click en el boton, se ejecutara la funcion handleClick*/}
      <Button handleClick={handleClick} text="Click me" />
      {/*Si hacemos click en el boton, se incrementara el contador*/}
      <Button handleClick={increment} text="Increment" />
      {/*Si hacemos click en el boton, se reseteara el contador*/}
      <Button handleClick={setToZero} text="Reset" />
      {/*Si hacemos click en el boton, se decrementara el contador*/}
      <Button handleClick={decrease} text="Decrement" />
    </div>
  );
};
export default App;

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({onClick,text}) => {
  return <button onClick={onClick}>{text}</button>;
};
