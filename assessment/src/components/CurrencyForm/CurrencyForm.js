import React from 'react';
import CurrencyFormTextBox from '../CurrecyFormTextBox/CurrencyFormTextBox';
import "./CurrencyForm.css"

class CurrencyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: {
                "EUR": 1.09196,
                "USD": 1.27499,
                "AUD": 1.79721
            },
            gbpTextbox: "",
            currTextbox: "",
            selectCurrency: "EUR"
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        // eslint-disable-next-line
        const selectedCurrency = this.state.selectCurrency
        const {...currency} = this.state.currency
        this.setState({
            currTextbox: this.state.gbpTextbox*currency[selectedCurrency]
        })
    }

    render() {
        return (
            <div className="currency-form-container">
                <div className="currency-container">
                    <CurrencyFormTextBox title="GBP" isSelectable={false} handleChange={this.handleChange} name="gbpTextbox" value={this.state.gbpTextbox}/>
                    <i className="fas fa-exchange-alt"></i>
                    <CurrencyFormTextBox title="GBP" isSelectable={true} handleChange={this.handleChange} name="currTextbox" value={this.state.currTextbox}/>
                    <button onClick={this.handleClick}><i className="fas fa-caret-right"></i></button>
                </div>
            </div>
        )
    }
}

export default CurrencyForm