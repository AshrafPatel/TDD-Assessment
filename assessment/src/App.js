import React from 'react';
import './App.css';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm"
import DateForm from "./components/DateForm/DateForm"
import DateLogger from "./components/DateLogger/DateLogger"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      history: {

      }
    }
  }

  makeHistory = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <CurrencyForm makeHistory={this.makeHistory}/>
        <DateForm/>
        <DateLogger/>
      </div>
    );
  }
}

export default App;
