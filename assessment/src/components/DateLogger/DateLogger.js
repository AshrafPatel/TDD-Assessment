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
            {filteredDate.map((indexDate, idx) => {
                const dateStr = new Date(indexDate.dateToday)
                const {currency} = indexDate
                const signCurrency = () => {
                    if (currency === "EUR") return "€"
                    else if (currency === "USD") return "$"
                    else if (currency === "AUD") return " A$"
                }
                return (
                <div className="date-log-container" key={idx}>
                    <h3>Time Requested:<br/>{dateStr.toLocaleDateString()}</h3>
                    <h3>Amount Requested:<br/>£{indexDate.amountRequested}</h3>
                    <h3>Currency:<br/>{currency}</h3>
                    <h3>Amount Offered:<br/>{signCurrency() + indexDate.amountOffered}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default DateLogger