import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./features/counter/Counter";
import Coin from "./features/coin/Coin";
import CounterState from "./context/CounterState";

function App() {
 
  return (
    <CounterState>
      <div className="App">
        <header className="App-header">
          <Counter />
          <Coin />
        </header>
      </div>
    </CounterState>
  );
}

export default App;
