import './App.css';

import ParameterDisplay from './components/ParameterDisplay';
import NotificationsPanel from './components/NotificationsPanel';
import CommandPanel from './components/CommandPanel';

import PowerContextProvider from './PowerContextProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        test
      </header>
      <PowerContextProvider>
        <ParameterDisplay />
        <ParameterDisplay />
        <ParameterDisplay />
        <ParameterDisplay />
        <CommandPanel />
        <NotificationsPanel />
      </PowerContextProvider>
    </div>
  );
}

export default App;
