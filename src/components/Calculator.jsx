/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Calculator({ operators }) {
  const numbers = [];
  operators.forEach((operator) => {
    numbers.push(operator);
  });
  for (let i = 9; i > -1; i--) {
    numbers.push(i);
  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [displayNumber, setDisplayNumber] = useState("");

  function displayNum(number) {
    setIsButtonClicked(true);
    setDisplayNumber(number)
  }

  return (
    <div id="calculator">
      <div id="monitor"></div>
      <div id="pre-calc-container">{isButtonClicked && <p>{displayNumber === "C" ? '' : displayNumber }</p>}</div>
      <div id="keyboard">
        {numbers.map((number) => (
          <button
            onClick={() => {
              displayNum(number)
            }}
            id={number}
            key={number}
            className={`calc-number ${number === "C" ? "clear-button" : ""}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
