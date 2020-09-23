import React from "react"
import "./CurrencyFormTextBox.css"

const CurrencyFormTextBox = ({title, isSelectable, handleChange, name, value}) => {
    return (
        <div className="currency-text-container">
            {
                isSelectable ? 
                <select onChange={handleChange} name="selectCurrency">
                    <option>EUR</option>
                    <option>AUD</option>
                    <option>USD</option>
                </select> :
                <h3>{title}</h3>
            }
            <input className="currency-text" type="number" name={name} disabled={isSelectable} onChange={handleChange} value={value}/>
        </div>
    )
}

export default CurrencyFormTextBox