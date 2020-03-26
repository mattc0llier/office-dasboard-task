import React from 'react';

const DrinksLeft = ({kpi}) => {
    return(
    <p className='kpi-text'>{kpi.data.drinksRemaining}
        <span className='units-text'>/ {kpi.data.lastDrinksOrder} units</span>
    </p>
    )
}

export default  DrinksLeft