/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header"
import Calculator from "./components/Calculator"


function App() {

  return (
    <>
      <Header/>
      <Calculator
      operators={['C','+', '-','✖','/']}/>
    </>
  );
}

export default App;