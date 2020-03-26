import React from 'react';

const OutsideWeather = ({kpi}) => {
    return(
        <div className="outside-weather">
            <p className='kpi-text'>{kpi.data.temperature}
                <span className='units-text'>degrees</span>
            </p>    
            <p className='kpi-text'>{kpi.data.weather}</p>
        </div>
    
    )
}

export default  OutsideWeather