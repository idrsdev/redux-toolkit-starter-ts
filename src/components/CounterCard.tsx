import React from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment, amountAdded } from "../features/counter/counterSlice";

const CounterCard = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  const handleIncrement = () => {
    dispatch(amountAdded(3));
  };

  return (
    <>
      <p>
        <button onClick={handleClick}>No Of Clicks: {count}</button>
      </p>
      <p>
        <button onClick={handleIncrement}>Increase Clicks by 3: {count}</button>
      </p>
      <a
        className="App-link"
        href="https://redux-toolkit.js.org/tutorials/typescript"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
    </>
  );
};

export default CounterCard;
