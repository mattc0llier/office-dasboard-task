import React from 'react';

const WhosInTheOffice = ({kpi}) => {
    return(
        <p className="kpi-text">{kpi.data[0].name}</p>
    )
}

export default WhosInTheOffice