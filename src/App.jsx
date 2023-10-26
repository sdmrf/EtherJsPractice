import "./App.scss";
import React, { useState } from "react";


const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  
  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
    <div className="Wrapper">
      <div className="Count">
        Count : {count}
      </div>
      <div className="Buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div className="Reset">
        <button onClick={() => setCount(0)}></button>
        <label>Reset</label>
      </div>
    </div>
    </div>
  )
}

export default App