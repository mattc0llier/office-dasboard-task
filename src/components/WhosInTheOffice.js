import React from 'react';

const WhosInTheOffice = ({kpi}) => {
    console.log(kpi.data);
    
    return(
        <div className="whoIsInTheOffice">
            {kpi.data.map(employee => (
                <p className='kpi-text' key={employee.id}>{employee.name}
                    <span className='units-text'>{employee.status}</span>
                </p>
             ))}
        </div>
        

    )
}

export default  WhosInTheOffice