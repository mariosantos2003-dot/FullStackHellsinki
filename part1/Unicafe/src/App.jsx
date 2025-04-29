import { useState } from "react";



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = (props) => {
    setGood(good + 1);
    console.log(good)
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <div>
      <h1>statistics</h1> 
      <p>
        Good {good}
        Neutral {neutral}
        Bad {bad}
      </p>
    </div>
    </div>

   

  );
};

export default App;
