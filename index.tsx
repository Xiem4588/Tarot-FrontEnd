/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation';
import {name as GameTarot} from './app.json';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

AppRegistry.registerComponent(GameTarot, () => App);
