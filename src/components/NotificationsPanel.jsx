import React, { useContext } from 'react';
import PowerContext from '../PowerContext';

function disconnectedAlert(pos){
  return(
    <div className="alert">
      {`Rack ${pos} has been disconnected!`}
    </div>
  );
}

function lowVoltageAlert(pos){
  return(
    <div className="alert">
      {`Low voltage on rack ${pos}!`}
    </div>
  );
}

function highCurrentAlert(pos){
  return(
    <div className="alert">
      {`High current on rack ${pos}!`}
    </div>
  );
}

function veryHighCurrentAlert(pos){
  return(
    <div className="alert">
      {`Very high current on rack ${pos}!`}
    </div>
  );
}

function getNotifications(power){
  let Notifications = [];
  if (power){
    for (let pos in power.voltage){
      if (power.voltage[pos] < 18){
        Notifications.push(lowVoltageAlert(pos));
      }
      if (power.connected[pos]){
        if (power.current[pos] > 3){
          Notifications.push(veryHighCurrentAlert(pos));
        } else if (power.current[pos] > 2.5){
          Notifications.push(highCurrentAlert(pos));
        }
      } else {
        Notifications.push(disconnectedAlert(pos));
      }
    }
  }
  return Notifications;
}

function NotificationsPanel() {
  const {power} = useContext(PowerContext);
  return (
    <div className="Notifications_Panel">
      <h3>
        Notifications
      </h3>
      {getNotifications(power)}
    </div>
  );
}

export default NotificationsPanel;
