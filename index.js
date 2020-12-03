import {Provider as PaperProvider} from 'react-native-paper';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as MobxProvider} from 'mobx-react';
import App from './App';
import {name as appName} from './app.json';
import AppTheme from './theme';

export default function Main() {
  return (
    <MobxProvider>
      <PaperProvider theme={AppTheme}>
        <App />
      </PaperProvider>
    </MobxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
