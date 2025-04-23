import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
const App = () => {
  
  

  return (
    <div>
      <h1><Header course='Half Stack application development' /></h1>
      <p>
        <Content part1={'Fundamentals of React'} exercise1={10} />
      </p>
      <p>
        <Content part2={'Using props to pass data'} exercise2={7} />
      </p>
      <p>
        <Content part3={'State of a component'} exercise3={14} />
      </p>
      <Total exercise1={10} exercise2={7} exercise3={14} />
    </div>
  )
}

export default App