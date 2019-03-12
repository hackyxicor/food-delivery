import React, { Component, Fragment } from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import { ScaledSheet } from 'react-native-size-matters';
import NetworkState, { Settings } from 'react-native-network-state'


//import root navigator
import RootNavigator from './App/Navigation/index.navigation';
import { View } from './App/UIComponents';

import NotifyService from './App/Services/notify.service';

export default class App extends Component {
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


const styles = ScaledSheet.create({
  container: {
    flex: 1
  }
})