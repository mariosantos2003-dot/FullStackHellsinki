const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
  
    //Funcion para que cuando pulses el boton izquierdo, se sume 1 al contador de clicks izquierdo
    const handleLeftClick = () => {
        setLeft(left + 1)
        setAll(allClicks.concat("L"))
    }
    const handleRightClick = () => {
        setRight(right + 1 )
        setAll(allClicks.concat("R"))
    }

    //Se muestra el contador de clicks izquierdo y derecho
    return (
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
        <p>{allClicks.join("")}</p>
      </div>
    )
  }