import { useState } from 'react'



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <h1>
      Give Feedback
    </h1>
    <div>
      
    </div>
  )
}

export default App