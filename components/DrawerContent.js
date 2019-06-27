import React, { PureComponent } from 'react'
import MapView from 'react-native-maps';

export default class DrawerContent extends PureComponent {
  render() {
    return (
      <MapView 
        style={{flex: 1}} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}
