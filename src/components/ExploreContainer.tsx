import React from 'react';
import { IonButton } from '@ionic/react';

import BluetoothTerminal from '../vendor/bluetooth-terminal';

import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  let terminal = new BluetoothTerminal("0000ffe0-0000-1000-8000-00805f9b34fb","0000ffe1-0000-1000-8000-00805f9b34fb","0000ffe2-0000-1000-8000-00805f9b34fb",'\n','\n');
  terminal.receive = function(data:string) {
    console.log("ble received: ",data);
  };
  let onConnectClick = function() {
    console.log("onConnectClick")
    terminal.connect().then(async () => {
      console.log(terminal.getDeviceName() + ' is connected!');

    });
  }
  let onDisconnectClick = function() {
    console.log("onDisonnectClick")
    terminal.disconnect();
  }
  let onStartClick = async function() {
    console.log("onStartClick")
    try {
      await terminal.send("0_0_1")
      await terminal.send("0_1_0.5")
    } catch(err) {
      console.log(err)
    }
  }
  let onStopClick = async function() {
    console.log("onStopClick")
    try {
      await terminal.send("0_0_0")
      await terminal.send("0_1_0")
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="container">
      <IonButton expand="full" onClick={onConnectClick}>Connect</IonButton>
      <IonButton expand="full" onClick={onDisconnectClick}>Disconnect</IonButton>
      <IonButton expand="full" onClick={onStartClick}>start</IonButton>
      <IonButton expand="full" onClick={onStopClick}>stop</IonButton>
    </div>
  );
};

export default ExploreContainer;
