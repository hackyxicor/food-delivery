import React, { Component, Fragment } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import NetworkState from 'react-native-network-state'
import codePush from "react-native-code-push";
import { Provider as PaperProvider } from 'react-native-paper';

import { Theme } from './App/Constants/theme.constants';

//import root navigator
import RootNavigator from './App/Navigation/index.navigation';
import NotifyService from './App/Services/notify.service';

class App extends Component {
  render() {
    return (
      <PaperProvider theme={Theme} >
        <RootNavigator />
        <DropdownAlert ref={ref => NotifyService.register(ref)} />
        <NetworkState
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
          onConnected={() => console.log('connected')}
          onDisconnected={() => { }}
        />
      </PaperProvider>
    );
  }
}

export default codePush()(App);
