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
        if (this.props.kpi.id == 1) {	
            return(	
                <div className='card'>	
                    <div className='card-container'>	
                        <h3>{this.props.kpi.title}</h3>	
                        <p className='kpi-text'>{this.props.kpi.data}</p>	
                        <ConcurrentUsers />	
                    </div>	
                </div>          	
            )	
        } else if (this.props.kpi.id == 2) {	
            return(	
                <div className='card'>	
                    <div className='card-container'>	
                        <h3>{this.props.kpi.title}</h3>	
                        <p className='kpi-text'>{this.props.kpi.data.currentTemperature}</p>	
                        <OfficeTemperature />	
                    </div>	
                </div>          	
            )	
        } else if (this.props.kpi.id == 3) {	
            return(	
                <div className='card'>	
                    <div className='card-container'>	
                        <h3>{this.props.kpi.title}</h3>	
                        <p className='kpi-text'>{this.props.kpi.data.nextWaterDate}</p>	
                        <PlantReminder />	
                    </div>	
                </div>          	
            )	
        } else if (this.props.kpi.id == 4) {	
            return(	
                <div className='card'>	
                    <div className='card-container'>	
                        <h3>{this.props.kpi.title}</h3>	
                        <p className='kpi-text'>{this.props.kpi.data.temperature}</p>	
                        <OutsideWeather />	
                    </div>	
                </div>          	
            )	
        } else if (this.props.kpi.id == 5) {	
            return(	
                <div className='card'>	
                    <div className='card-container'>	
                        <h3>{this.props.kpi.title}</h3>	
                        <p className='kpi-text'>{this.props.kpi.data.drinksRemaining}</p>	
                        <DrinksLeft />	
                    </div>	
                </div>          	
            )	
        } else if (this.props.kpi.id == 6) {	
            return(	
                <div className='card'>	
                    <div className='card-container'>	
                        <h3>{this.props.kpi.title}</h3>	
                        <p className='kpi-text'>{this.props.kpi.data[0].name}</p>	
                        <WhosInTheOffice />	
                    </div>	
                </div>          	
            )	
        }
    }
}

export default Card