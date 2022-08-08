import "./../../App.css";
import { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";

function Counter() {
  const counterState = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={() => {
          counterState.decrement();
        }}
        className="btn-size"
      >
        -
      </button>
      <span className="counter-size">Counter Value from Counter Component: {counterState.counter}
      </span>
      <button
        onClick={() => {
          counterState.increment();
        }}
        className="btn-size"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
