import React from 'react';
import CurrencyFormTextBox from '../CurrecyFormTextBox/CurrencyFormTextBox';


const CurrencyForm = () => {
    return (
        <div className="currency-form-container">
            <div className="currency-container">
                <CurrencyFormTextBox title="GBP"/>
                <i className="fas fa-exchange-alt"></i>
                <CurrencyFormTextBox title="GBP"/>
                <button><i className="fas fa-caret-right"></i></button>
            </div>
        </div>
    )
}

export default CurrencyForm