import React, { useContext } from 'react';
import PowerContext from '../PowerContext';

function ParameterDisplay() {
  const { power } = useContext(PowerContext);
  return (
    <h3>
      {'I am a parameter: '}
    { power.voltage[0] }
    </h3>
  );
}

export default ParameterDisplay;
