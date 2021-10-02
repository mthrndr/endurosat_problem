import React, { createContext, useState, useEffect } from 'react';

const PowerContext = createContext('');
const MAX_VOLTAGE = 30;
const MAX_CURRENT = 4;

export function PowerContextProvider ({children}){
  const [power, setPower] = useState({
    voltage: [1,2],
    current: [1,2],
  });
  
  const updateValues = () => {
    const newPower = power;
    for (let pos in newPower.voltage){
      newPower.voltage[pos] = (newPower.voltage[pos] + 1) % MAX_VOLTAGE;
      newPower.current[pos] = parseFloat(((newPower.current[pos] + 0.1) % MAX_CURRENT).toFixed(1));
    }
    setPower({...newPower});
    return newPower;
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      updateValues();
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <PowerContext.Provider value={{power}}>
      {children}
    </PowerContext.Provider>
  )
}

export default PowerContext;
