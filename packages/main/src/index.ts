import 'haul/hot/patch'
import {
  makeHot,
  clearCacheFor,
  redraw
} from 'haul/hot'

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'


AppRegistry.registerComponent(appName, makeHot(() => App))


// HMR
declare const module: any
if (module.hot) {
    module.hot.accept(() => {})
    module.hot.accept(['./App'], () => {
      clearCacheFor((require as any).resolve('./App'));
      redraw(() => require('./App').default);
    });
  }