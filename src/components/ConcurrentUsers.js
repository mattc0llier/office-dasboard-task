import React from 'react';

const ConcurrentUsers = ({kpi}) => {
    return(
        <p className="kpi-text">{kpi.data}</p>
    )
}

export default ConcurrentUsers