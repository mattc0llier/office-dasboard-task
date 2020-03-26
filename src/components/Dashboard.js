import React from 'react';
import Card from './Card';
import '../../styles/components/dashboard.scss';

const Dashboard = ({allKpis}) => {
    return(
        <div className='dashboard'>
            <div className='dashboard-container'>
                {allKpis.map(kpi => (
                    <Card key={`kpi-${kpi.id}`} kpi={kpi}/>
                ))}
            </div>
        </div>
    )
}

export default Dashboard