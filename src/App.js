import './App.css';

import ParameterDisplay from './components/ParameterDisplay';
import NotificationsPanel from './components/NotificationsPanel';
import CommandPanel from './components/CommandPanel';

import { PowerContextProvider } from './PowerContext';

function ControlPanel () {
  return(
    <PowerContextProvider>
      <ParameterDisplay />
      <ParameterDisplay />
      <ParameterDisplay />
      <ParameterDisplay />
      <CommandPanel />
      <NotificationsPanel />
    </PowerContextProvider>
  );
}

function App() {
  return (
    <div className="App">
      test
      <ControlPanel />
    </div>
  );
}

export default App;
