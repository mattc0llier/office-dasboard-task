import React from 'react'
import ConcurrentUsers from './ConcurrentUsers'
import OfficeTemperature from './OfficeTemperature'
import PlantReminder from './PlantReminder'
import OutsideWeather from './OutsideWeather'
import DrinksLeft from './DrinksLeft'
import WhosInTheOffice from './WhosInTheOffice'

import '../../styles/components/card.scss';

class Card extends React.Component {
    constructor(){
        super()

        this.state = { kpiComponent: '' }
    }

    render(){
        console.log('kpi id', this.props.kpi)
        return(
            <div className='card'>
                <div className='card-container'>
                    <h3>{this.props.kpi.title}</h3>
                    <ConcurrentUsers />
                    <OfficeTemperature />
                    <PlantReminder />
                    <OutsideWeather />
                    <DrinksLeft />
                    <WhosInTheOffice />
                </div>
            </div>          
        )
    }
}

export default Card