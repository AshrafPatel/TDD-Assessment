import React from "react"
import "./FormTextBox.css"

const FormTextBox = ({title, isSelectable, handleChange, name, value, type}) => {
    return (
        <div className="form-text-container">
            {
                isSelectable ? 
                <select onChange={handleChange} name="selectCurrency">
                    <option>EUR</option>
                    <option>AUD</option>
                    <option>USD</option>
                </select> :
                <h3>{title}</h3>
            }
            <input className="form-text" type={type}  min={0} name={name} disabled={isSelectable} onChange={handleChange} value={value}/>
        </div>
    )
}

export default FormTextBox