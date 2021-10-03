import React, { useContext } from 'react';
import PowerContext from '../PowerContext';

function connectionButton(pos, toggleConnection){
  return(
    <button onClick={() => {
      toggleConnection(pos);
      }}
    >
      {`Toggle Connection on pack ${pos}`}
    </button>
  );
}

function getCommandOptions(connected, toggleConnection){
  let Commands = [];
    for(let pos in connected){
      Commands.push(connectionButton(pos, toggleConnection));
    }
  return Commands;
};

function CommandPanel() {
  const {power, toggleConnection} = useContext(PowerContext);
  return (
    <div className="command_panel">
      <div className="command_inner">
        <h3>
          Command Panel
        </h3>
        {getCommandOptions(power.connected, toggleConnection)}
      </div>
    </div>
  );
}

export default CommandPanel;
