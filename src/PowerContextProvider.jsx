import React, { createContext, useState } from 'react';

export const PowerContext = createContext();

function PowerContextProvider ({children}){
  const [power, setPower] = useState({
    voltages: [],
    current: [],
  });
  return (
    <PowerContext.Provider value ={{power}}>
      {children}
    </PowerContext.Provider>
  )
}

export default PowerContextProvider;
