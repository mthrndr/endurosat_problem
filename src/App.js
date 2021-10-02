import './App.css';

import ParameterDisplay from './components/ParameterDisplay';
import NotificationsPanel from './components/NotificationsPanel';
import CommandPanel from './components/CommandPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        test
        <ParameterDisplay />
        <ParameterDisplay />
        <ParameterDisplay />
        <ParameterDisplay />
        <CommandPanel />
        <NotificationsPanel />
      </header>
    </div>
  );
}

export default App;
