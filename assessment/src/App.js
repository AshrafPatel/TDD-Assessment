import React from 'react';
import './App.css';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm"
import DateForm from "./components/DateForm/DateForm"
import DateLogger from "./components/DateLogger/DateLogger"

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyForm/>
      <DateForm/>
      <DateLogger/>
    </div>
  );
}

export default App;
