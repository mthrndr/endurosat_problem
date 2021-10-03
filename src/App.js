import React from 'react';

import './App.css';
import ParameterDisplay from './components/ParameterDisplay';
import NotificationsPanel from './components/NotificationsPanel';
import CommandPanel from './components/CommandPanel';

import { PowerContextProvider } from './PowerContext';

function ControlPanel () {

  return(
    <div className="control_panel">
      <ParameterDisplay type='voltage' id='0'/>
      <ParameterDisplay type='current' id='0'/>
      <ParameterDisplay type='voltage' id='1'/>
      <ParameterDisplay type ='current' id='1'/>
      <CommandPanel />
      <NotificationsPanel />
    </div>
  );
}

function App() {
  return (
    <PowerContextProvider>
      <div className="App">
        <h1 className="title">
          Satellite Information
        </h1>
        <ControlPanel />
      </div>
    </PowerContextProvider>
  );
}

export default App;
