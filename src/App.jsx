import "./App.scss";
import React, { useEffect, useState } from "react";
import { getContract } from "./apiFeature";

const App = () => {
  const [count, setCount] = useState(null);

  const updateCount = async () => {
    const contract = await getContract();
    const countValue = await contract.get();
    setCount(Number(countValue));
  };

  useEffect(() => {
    updateCount();
  }, []);

  const handleIncrement = async () => {
    const contract = await getContract();
    await contract.inc();
    updateCount();
  };

  const handleDecrement = async () => {
    const contract = await getContract();
    await contract.dec();
    updateCount();
  };

  const handleReset = async () => {
    const contract = await getContract();
    await contract.reset();
    updateCount();
  };

  return (
    <div className="App">
      <div className="Wrapper">
        <div className="Count">
          Count: {count}
        </div>
        <div className="Buttons">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
        <div className="Reset">
          <button onClick={handleReset}></button>
          <label>Reset</label>
        </div>
      </div>
    </div>
  );
};

export default App;
