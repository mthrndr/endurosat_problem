import React, { useContext } from 'react';
import PowerContext from '../PowerContext';

function lowVoltageAlert(){
  return(
    <div className="alert">
      Low voltage!
    </div>
  );
}

function highCurrentAlert(){
  return(
    <div className="alert">
      High current!
    </div>
  );
}

function veryHighCurrentAlert(){
  return(
    <div className="alert">
      Very high current!
    </div>
  );
}

function getNotifications(power){
  let Notifications = [];
  if (power){
    for (let pos in power.voltage){
      if (power.voltage[pos] < 18){
        Notifications.push(lowVoltageAlert());
      }
      if (power.current[pos] > 3){
        Notifications.push(veryHighCurrentAlert());
      } else if (power.current[pos] > 2.5){
        Notifications.push(highCurrentAlert());
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
