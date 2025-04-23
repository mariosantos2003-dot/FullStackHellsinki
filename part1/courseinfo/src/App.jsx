import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <div>
      <h1><Header course={course} /></h1>
      <p>
        <Content part1={part1.name} />
        <Content exercise1={part1.exercises} />
      </p>
      <p>
        <Content part2={part2.name} />
        <Content exercise2={part2.exercises} />
      </p>
      <p>
        <Content part3={part3.name} />
        <Content exercise3={part3.exercises} />
      </p>
      <Total exercise1={10} exercise2={7} exercise3={14} />
    </div>
  )
}

export default App