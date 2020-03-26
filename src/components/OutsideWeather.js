import React from 'react';

const OutsideWeather = ({kpi}) => {
    return(
        <p className="kpi-text">{kpi.data.temperature}</p>
    )
}

export default OutsideWeather