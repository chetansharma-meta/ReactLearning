import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    }
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
  };

  return (
    <>
      <h1>chetan sharma</h1>

      <h2>Value counter: {counter}</h2>

      <button onClick={addValue}>Add Val</button>
      <br />
      <br />
      <button onClick={decValue}>Remove Val</button>
    </>
  );
}

export default App;
