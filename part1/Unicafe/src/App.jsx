import { useState } from "react";

const Statistics = (props) => {
  // Si no hay estadisticas, muestra un mensaje
  if (props.total === 0) {
    return (
      <h1>No FeedBack Given</h1>
    )
  }
  // Si hay estadisticas, muestra las estadisticas
  return (
    <div>
      <h1>Statistics</h1>

     <table>
      <tbody>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.total} />
        <StatisticsLine text="average" value={props.average} />
        <StatisticsLine text="positive" value={props.percentage} />
      </tbody>
     </table>
    </div>
    
  )
}

//Componente de Button
const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const StatisticsLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const percentage = (good / total);
  const average = ((good + 1 * 1 + neutral * 0 + bad * -1) / total);

  const handleGood = () => {
    const updatedGood = good + 1;
    console.log(good);
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
  };



  return (

    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="good">Good</Button>
      <Button handleClick={handleNeutral} text="neutral">Neutral</Button>
      <Button handleClick={handleBad} text="bad">Bad</Button>
      <div>
        <h1>statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
          average={average} />

      </div>
    </div>
  );
};

export default App;
