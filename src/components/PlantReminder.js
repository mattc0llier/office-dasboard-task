import React from 'react';

const PlantReminder = ({kpi}) => {
    return(
        <p className="kpi-text">{kpi.data.nextWaterDate}</p>
    )
}

export default PlantReminder