import React, { useState } from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.incrementCounter}>+1</button>
      <button onClick={props.decrementCounter}>-1</button>
    </div>
  );
}

function Display(props) {
  return <div>{props.clicks}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <Display clicks={counter} />
      <Button incrementCounter={increment} decrementCounter={decrement} />
    </div>
  );
}

export default App;
