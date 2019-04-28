import React, { Component, Fragment } from 'react';
import { Text } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import NetworkState from 'react-native-network-state'
import codePush from "react-native-code-push";
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen'
import GlobalFont from 'react-native-global-font';
import RBSheet from "react-native-raw-bottom-sheet";

import { Theme } from './App/Constants/theme.constants';

//import root navigator
import RootNavigator from './App/Navigation/index.navigation';
import NotifyService from './App/Services/notify.service';
import BottomSheetService from './App/Services/bottomSheet.service';
import FilterComponent from './App/Components/Filter-Component/filter.component';
import MenuComponent from './App/Components/Menu-Component/menu.component';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
    // GlobalFont.applyGlobal('Muli')
  }

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
        <RBSheet
          ref={ref => BottomSheetService.register('FILTER', ref)}
          height={350}
          duration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center'
            }
          }}
        >
          <FilterComponent />
        </RBSheet>
        <RBSheet
          ref={ref => BottomSheetService.register('MENU', ref)}
          height={350}
          duration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center'
            }
          }}
        >
          <MenuComponent />
        </RBSheet>
      </PaperProvider >
    );
  }
}

export default codePush()(App);
