import React, { Component } from 'react';
import { Provider } from 'react-redux';

//import root navigator
import RootNavigator from './App/Navigation/index.navigation';

import store from './App/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <RootNavigator />
      </Provider>
    );
  }
}
