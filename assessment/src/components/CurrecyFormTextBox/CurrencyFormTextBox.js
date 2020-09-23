import React from "react"

const CurrencyFormTextBox = ({title}) => {
    return (
        <div className="currency-text-container">
            <h3>{title}</h3>
            <input className="currency-text" type="text"/>
        </div>
    )
}

export default CurrencyFormTextBox