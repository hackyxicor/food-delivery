import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import { ScaledSheet } from 'react-native-size-matters';

//import root navigator
import RootNavigator from './App/Navigation/index.navigation';
import { View } from './App/UIComponents';
// import store from './App/Store';

import NotifyService from './App/Services/notify.service';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <RootNavigator />
        <DropdownAlert ref={ref => NotifyService.register(ref)} />
      </View>
    );
  }
}


const styles = ScaledSheet.create({
  container: {
    flex: 1
  }
})