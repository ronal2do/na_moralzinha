import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import MapScreen from '../screens/Map';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    headerMode: 'none'
  },
});

const routes = {
  Home: MapScreen,
}

export const HomeStack = createStackNavigator(routes, config);
const Navigator = createDrawerNavigator(routes);

export const ExperimentalStack = createStackNavigator({ Navigator }, config)
