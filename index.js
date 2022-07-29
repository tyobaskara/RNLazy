/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import AppWithoutLazy from './src/AppWithoutLazy';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => AppWithoutLazy);
