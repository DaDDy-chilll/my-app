import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increse() {
    setCount(count + 1);
  }
  function decrese() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increse}>+</button>
      <button onClick={decrese}>-</button>
    </div>
  );
}
export default App;
