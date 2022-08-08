import React, {useContext} from "react";
import CounterContext from "../../context/CounterContext";

const Coin = (props) => {

    // NEW METHOD 1 or For FUNCTIONAL COMPONENT
    const counterState  = useContext(CounterContext);
  return (
    <div>
      <span className="counter-size">Counter Value From Coin Component: 
      {/* NEW METHOD 1 or For FUNCTIONAL COMPONENT  */}
      {counterState.counter}
      
      {/******  OLD METHOD 2 ******/}
      <CounterContext.Consumer>
        {(value)=>{
            return <h1>{value.name}</h1>
        }}
      </CounterContext.Consumer>
      </span>
    </div>
  );
};

export default Coin;
