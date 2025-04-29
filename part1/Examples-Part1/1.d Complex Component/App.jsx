const { useState } = require("react");

const History = (props) => {
  //Si no hay ningun click, te explica como se realizan los clicks
  if (props.allClicks.lenght === 0) {
    return <div>The app is used by clicking the buttons</div>;
  }
  return (
    <div>
      {/*Se muestra el historial de clicks button press history*/}
      {props.allClicks.join(" ")}
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  //Funcion para que cuando pulses el boton izquierdo, se sume 1 al contador de clicks izquierdo
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedleft = left + 1;
    setLeft(updatedleft);
    setTotal(updatedleft + right);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  //Se muestra el contador de clicks izquierdo y derecho
  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {clicks.right}
      //Se muestra el total de clicks
      <History allClicks={allClicks} />
    </div>
  );
};
export default App;