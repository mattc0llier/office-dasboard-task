import React from 'react';

const PlantReminder = ({kpi}) => {

    const today = new Date().getTime();
    const wateringDate = new Date(kpi.data.nextWaterDate).getTime()
    const timeUntilWater = Math.abs(wateringDate - today)
    const diff = Math.floor(timeUntilWater/(1000 * 60 * 60  * 24))

    return(
    <p className='kpi-text'>{diff} 
        <span className='units-text'>days</span>
    </p>
    )
}

export default  PlantReminder