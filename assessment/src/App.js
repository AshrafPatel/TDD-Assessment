import React from 'react';
import './App.css';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm"
import DateForm from "./components/DateForm/DateForm"
import DateLogger from "./components/DateLogger/DateLogger"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: {
        "EUR": 1.09196,
        "USD": 1.27499,
        "AUD": 1.79721
      },
      gbpTextbox: "",
      currTextbox: "",
      selectCurrency: "EUR",
      history: [
        
      ],
      dateFrom: "",
      dateTo: ""
    }
  }

  handleChange = (e) => {
    if (e.target.name === "gbpTextbox" && e.key === "-") {
      return
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClickCurrency = (e) => {
    // eslint-disable-next-line
    const selectedCurrency = this.state.selectCurrency
    const {...currency} = this.state.currency
    if (this.state.gbpTextbox > 0) {
      this.setState({
          currTextbox: (this.state.gbpTextbox*currency[selectedCurrency]).toFixed(2)
      })
      this.makeHistory()
    }
  }

  handleClickDate = (e) => {
    if (this.state.dateFrom === "" || this.state.dateTo === "" || this.state.dateFrom > this.state.dateTo) {
      alert("Enter a valid date!")
    }
  }

  makeHistory = () => {
    const timestamp = Date.now().toString()
    const amount = this.state.gbpTextbox
    const query = this.state.selectCurrency
    const {...currency} = this.state.currency;
    const result =  (this.state.gbpTextbox*currency[query]).toFixed(2)
    const tempHistory = [...this.state.history]
    tempHistory.push({"timestamp": timestamp, "currency": query,"amountRequested": amount,"amountOffered": result})
    this.setState({
      history: tempHistory
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Currency Converter</h1>
        <CurrencyForm handleClick={this.handleClickCurrency} handleChange={this.handleChange} gbpTextbox={this.state.gbpTextbox} currTextbox={this.state.currTextbox}/>
        <DateForm handleClick={this.handleClickDate} handleChange={this.handleChange} dateFrom={this.state.dateFrom} dateTo={this.state.dateTo}/>
        <DateLogger dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
