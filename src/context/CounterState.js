import { useState } from "react";
import CounterContext from "./CounterContext";

const CounterState = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterState;
