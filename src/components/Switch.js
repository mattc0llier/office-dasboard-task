import React from 'react';

import ConcurrentUsers from './ConcurrentUsers'
import OfficeTemperature from './OfficeTemperature'
import PlantReminder from './PlantReminder'
import OutsideWeather from './OutsideWeather'
import DrinksLeft from './DrinksLeft'
import WhosInTheOffice from './WhosInTheOffice'

// a component that will render one or more components
// based on a switch statement
const Switch = ({kpi}) => {

  let kpiComponent;

  const kpiId = kpi.id;
  // check the type of the component given in props
  switch (kpiId) {
    case 1: {
        kpiComponent = (<ConcurrentUsers kpi={kpi}/>);
        break;
    }
    case 2:{
        kpiComponent = (<OfficeTemperature kpi={kpi}/>);
        break;
    }
    case 3: {
        kpiComponent = (<PlantReminder kpi={kpi}/>);
        break;     
    }
    case 4: {
        kpiComponent = (<OutsideWeather kpi={kpi}/>);
        break;   
    }
    case 5: {
        kpiComponent = (<DrinksLeft kpi={kpi}/>);
        break;  
    }
    case 6: {
        kpiComponent = (<WhosInTheOffice kpi={kpi}/>);
        break;  
    }
    default: {
        kpiComponent = (null)
    }
}
// return the output created in switch/case
return kpiComponent; 
};

export default Switch;