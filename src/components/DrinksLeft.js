import React from 'react';

const DrinksLeft = ({kpi}) => {
    return(
        <p className="kpi-text">{kpi.data.drinksRemaining}</p>
    )
}

export default DrinksLeft