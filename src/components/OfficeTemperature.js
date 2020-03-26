import React from 'react';

const OfficeTemperature = ({kpi}) => {
    return(
        <p className="kpi-text">{kpi.data.currentTemperature}</p>
    )
}

export default OfficeTemperature