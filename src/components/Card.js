import React from 'react'
import '../../styles/components/card.scss';

const Card = ({kpi}) => {
    return(
        <div className='card'>
            <div className='card-container'>
                <h3>{kpi.title}</h3>
            </div>
        </div>          
    )
}
export default Card