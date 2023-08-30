/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation';
import {name as GameTarot} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(GameTarot, () => App);
