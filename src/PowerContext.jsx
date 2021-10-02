import React, { createContext, useState } from 'react';

const PowerContext = createContext('');

export function PowerContextProvider ({children}){
  const [power, setPower] = useState({
    voltage: [0,0],
    current: [0,0],
  });
  return (
    <PowerContext.Provider value={{power}}>
      {children}
    </PowerContext.Provider>
  )
}

export default PowerContext;
