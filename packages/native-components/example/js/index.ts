/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';   // ReactActivity.getMainComponentName()

AppRegistry.registerComponent(appName, () => App);
