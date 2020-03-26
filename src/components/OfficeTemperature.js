import React from 'react';

const OfficeTemperature = ({kpi}) => {
    return(
    <p className='kpi-text'>{kpi.data.currentTemperature}
        <span className='units-text'>degrees</span>
    </p>
    )
}

export default  OfficeTemperature