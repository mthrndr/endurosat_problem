import React, { useContext } from 'react';
import PowerContext from '../PowerContext';

function ParameterDisplay({type, id}) {
  const {power} = useContext(PowerContext);
  return (
    <>
      <h3>
        {`Displaying ${type} on rack ${id}`}
      </h3>
      <p>
        {power[type][id]}
      </p> 
    </>
  );
}

export default ParameterDisplay;
