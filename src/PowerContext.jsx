import React, { createContext, useState } from 'react';

const PowerContext = createContext('');

export function PowerContextProvider ({children}){
  const [power, setPower] = useState({
    voltage: [1,2],
    current: [3,4],
  });
  return (
    <PowerContext.Provider value={{power}}>
      {children}
    </PowerContext.Provider>
  )
}

export default PowerContext;
