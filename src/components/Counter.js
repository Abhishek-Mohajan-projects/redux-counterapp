import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "./services/actions/CounterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterIncrement());
  };

  const handleDecrement = () => {
    dispatch(counterDecrement());
  };

  const handleReset = () => {
    dispatch(counterReset());
  };
  return (
    <>
      <div>
        <h1>React-Redux Counter App</h1>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
