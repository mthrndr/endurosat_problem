import React, { useContext } from 'react';
import PowerContext from '../PowerContext';

function ParameterDisplay({type, id}) {
  const {power} = useContext(PowerContext);
  return (
    <div className='parameter_display'>
      <h3 className='parameter_inner'>
        {`Displaying ${type} on rack ${id}: ${power[type][id]}`}
      </h3>
    </div>
  );
}

export default ParameterDisplay;
