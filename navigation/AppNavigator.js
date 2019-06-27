import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { HomeStack, ExperimentalStack } from './MainDrawerNavigator';

export default createAppContainer(
  createSwitchNavigator({
    HomeStack,
    ExperimentalStack,
  })
);
