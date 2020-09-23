import React from 'react';
import "./DateLogger.css"

const DateLogger = (props) => {
    const filteredDate = (props.history !== undefined || props.history.length !== 0) ? 
    props.history.filter(function (item) {
        let {dateFrom, dateTo} = props
        let dateCheck = item.dateToday
        console.log(dateFrom, dateTo)
        return dateCheck >= dateFrom && dateCheck <= dateTo;
    })
    :null
    if (props.history !== undefined || props.history.length !== 0) {
        console.log(filteredDate)
    }
    return (
        <div className="dates-log-container">
            {filteredDate.map(indexDate => {
                const dateStr = new Date(indexDate.dateToday)
                return (
                <div className="date-log-container">
                    <h3>Time Requested:<br/>{dateStr.toLocaleDateString()}</h3>
                    <h3>Currency:<br/>{indexDate.currency}</h3>
                    <h3>Amount Requested:<br/>{indexDate.amountRequested}</h3>
                    <h3>Amount Offered:<br/>{indexDate.amountOffered}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default DateLogger