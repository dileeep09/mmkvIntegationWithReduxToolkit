/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { persister, store } from './Redux/ReduxStore';
const AppRedux = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  ); 
};
AppRegistry.registerComponent(appName, () => AppRedux);
