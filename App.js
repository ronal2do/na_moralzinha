import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScreenOrientation } from 'expo'
import DrawerContent from './components/DrawerContent';
import DrawerFst from './components/DrawerFst';
import DrawerScd from './components/DrawerScd';
import MapView from 'react-native-maps';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._panel = React.createRef();
  }

  state = {
    orientation: null
  }

  componentDidMount() {
    this.asyncBootstrap()

    this.orListener = ScreenOrientation.addOrientationChangeListener(this.handleOrientationChange)
  }

  async asyncBootstrap() {
    const { orientation } = await ScreenOrientation.getOrientationAsync()
    this.setState({ orientation })
    await ScreenOrientation.unlockAsync()
  }

  handleOrientationChange = ({ orientationInfo: { orientation } }) => {
    this.setState({ orientation }, () => console.log('Orientation changed:', orientation))
  }

  render() {
    const { orientation } = this.state
    if ( orientation === null ) {
      return <ActivityIndicator/>
    }
    return (
      <> 
        <TouchableOpacity style={[styles.reportButton, { top: orientation === 'PORTRAIT' ? 55 : 30 }]} onPress={() => this._panel.current.show(300)}>
          <View>
            <Text>Show</Text>
          </View>
        </TouchableOpacity>
        <MapView 
          style={{flex: 1}} 
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <DrawerFst ref={this._panel} orientation={orientation}/>
        {/* <DrawerScd orientation={orientation}/> */}
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportButton: {
    position: 'absolute',
    zIndex: 2,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
