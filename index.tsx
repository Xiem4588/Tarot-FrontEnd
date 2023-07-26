/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation';
import {name as GameTarot} from './app.json';
import {Provider} from 'react-redux'; // thu vien react-redux dung de ket noi giua react voi redux. Provider là 1 component trích xuất từ thư viện react-redux
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

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
