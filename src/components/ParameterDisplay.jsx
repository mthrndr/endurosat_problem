import React, { useContext } from 'react';
import PowerContext from '../PowerContext';

function ParameterDisplay({type, id}) {
  const {power} = useContext(PowerContext);
  return (
    <>
      <h3>
        {'I am a parameter: '}
      </h3>
      <p>
        {power[type][id]}
      </p> 
    </>
  );
}

export default ParameterDisplay;
