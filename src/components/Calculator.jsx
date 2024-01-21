/* eslint-disable react/prop-types */
import Add from "./Add";

function Calculator({ operators }) {
  const numbers = [];
  operators.forEach((operator) => {
    numbers.push(operator);
  });
  for (let i = 9; i > -1; i--) {
    numbers.push(i);
  }

  return (
    <div id="calculator">
      <div id="monitor"></div>
      <div id="pre-calc-container"></div>
      <div id="keyboard">
        {numbers.map((number) => (
          <button key={number} className={`calc-number ${number === "C" ? "clear-button" : ""}`}>
            {number}
          </button>
        ))}
      </div>
      <Add />
    </div>
  );
}

export default Calculator;
