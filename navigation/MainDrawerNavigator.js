import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
import Map from '../screens/Map';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Map,
  },
  config
);

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const Navigator = createDrawerNavigator({
  HomeStack,
  // LinksStack,
  // SettingsStack,
});

// Navigator.path = '';

export default Navigator;
