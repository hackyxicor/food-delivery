import React, { Component, Fragment } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import NetworkState from 'react-native-network-state'
import codePush from "react-native-code-push";

//import root navigator
import RootNavigator from './App/Navigation/index.navigation';
import NotifyService from './App/Services/notify.service';

class App extends Component {
  render() {
    return (
      <Fragment>
        <RootNavigator />
        <DropdownAlert ref={ref => NotifyService.register(ref)} />
        <NetworkState
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
          onConnected={() => console.log('connected')}
          onDisconnected={() => { }}
        />
      </Fragment>
    );
  }
}

export default codePush()(App);
