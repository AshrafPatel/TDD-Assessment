import React from 'react';
import FormTextBox from '../FormTextBox/FormTextBox';
import "./CurrencyForm.css"

const CurrencyForm = (props) => {
    return (
        <div className="currency-form-container">
            <div className="currency-container">
                <FormTextBox type="number" title="GBP" isSelectable={false} handleChange={props.handleChange} name="gbpTextbox" value={props.gbpTextbox}/>
                <i className="fas fa-exchange-alt"></i>
                <FormTextBox type="number" title="GBP" isSelectable={true} handleChange={props.handleChange} name="currTextbox" value={props.currTextbox}/>
                <button onClick={props.handleClick}><i className="fas fa-caret-right"></i></button>
            </div>
        </div>
    )
}

export default CurrencyForm