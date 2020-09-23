import React from 'react';
import FormTextBox from '../FormTextBox/FormTextBox';
import "./DateForm.css"

const DateForm = (props) => {
    return (
        <div className="date-form-container">
            <div className="date-container">
                <FormTextBox type="date" title="From" isSelectable={false} handleChange={props.handleChange} name="dateFrom" value={props.dateFrom}/>
                <i class="fas fa-long-arrow-alt-right"></i>
                <FormTextBox type="date" title="To" isSelectable={false} handleChange={props.handleChange} name="dateTo" value={props.DateTo}/>
                <button onClick={props.handleClick}><i className="fas fa-caret-right"></i></button>
            </div>
        </div>
    )
}

export default DateForm