import React, { createContext, useState, useEffect } from 'react';

const PowerContext = createContext('');
const MAX_VOLTAGE = 30;
const MAX_CURRENT = 4;

export function PowerContextProvider ({children}){
  const [power, setPower] = useState({
    voltage: [18,21],
    current: [1,2],
    connected: [true, true],
  });
  
  function updateValues() {
    const newPower = power;
    for (let pos in newPower.voltage){
      if(newPower.connected[pos]){
        newPower.current[pos] = parseFloat(((newPower.current[pos] + 0.1) % MAX_CURRENT).toFixed(1));
      }
      newPower.voltage[pos] = (newPower.voltage[pos] + 1) % MAX_VOLTAGE;
    }
    setPower({...newPower});
    return newPower;
  }
 
  function toggleConnection(id){
  const newPower = power;
  newPower.connected[id] = !newPower.connected[id];
  if(newPower.connected[id]){
    newPower.current[id] = 2;
  } else {
    newPower.current[id] = 0;
  }
  setPower({...newPower});
  }
 
  useEffect(() => {
    const timer = setInterval(() => {
      updateValues();
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <PowerContext.Provider value={{power, toggleConnection}}>
      {children}
    </PowerContext.Provider>
  )
}

export default PowerContext;
