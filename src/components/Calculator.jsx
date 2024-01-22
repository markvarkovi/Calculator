/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function Calculator({ operators }) {
  const clickSoundUrl = "https://www.fesliyanstudios.com/play-mp3/387";
  const audio = new Audio(clickSoundUrl);
  const buttons = [];
  operators.forEach((operator) => {
    buttons.push(operator);
  });
  for (let i = 9; i > -1; i--) {
    buttons.push(i);
  }
  buttons.push("=");

  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue]  = useState("")

  function loadValues(buttonValue) {
    if (buttonValue === "C") {
      setInputValue("")
      setDisplayedValue("")
    } else if ( buttonValue === "=") {
       setDisplayedValue(inputValue)
       setInputValue("")
    } else {
      setInputValue((prevValue) => prevValue + buttonValue);
    }
  }

  return (
    <div id="calculator">
      <div id="monitor">{displayedValue}</div>
      <div id="pre-calc-container">{<p>{inputValue}</p>}</div>
      <div id="keyboard">
        {buttons.map((buttonValue) => (
          <button
            onClick={() => {
              audio.play();
              loadValues(buttonValue);
              console.log(inputValue);
            }}
            id={buttonValue}
            key={buttonValue}
            className={`calc-number ${buttonValue === "C" ? "clear-button" : ""}`}
          >
            {buttonValue}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
