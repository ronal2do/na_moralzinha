import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ScreenOrientation } from 'expo'
import AppNavigator from './navigation/AppNavigator';
import Panel, { PanelHelper } from './components/Panel';
export default class App extends React.PureComponent {
  orientationListener = null;

  state = {
    orientation: 'PORTRAIT'
  }

  componentDidMount() {
    this.orientationListener = ScreenOrientation.addOrientationChangeListener(this.handleOrientationChange)
    this.asyncBootstrap()
  }

  async asyncBootstrap() {
    const { orientation } = await ScreenOrientation.getOrientationAsync()
    this.setState({ orientation })
    await ScreenOrientation.unlockAsync()
  }

  handleOrientationChange = ({ orientationInfo: { orientation } }) =>
    this.setState({ orientation }, () => console.log('Orientation changed:', orientation))

  componentWillUnmount() {
    if(this.orientationListener) {
      ScreenOrientation.removeOrientationChangeListeners()
    }
  }

  render() {
    const { width, height } = Dimensions.get('window')
    const { orientation } = this.state

    const portrait = orientation === 'PORTRAIT'

    if ( orientation === null || orientation === undefined ) {
      return <ActivityIndicator/>
    }

    return (
      <>
        <AppNavigator/>
        {/* 
          This Panel can be renamed to PanelBuild or PanelProvider,
          I just put it in topLevel to show it being accessed from other places in the app
          PanelHelper.show()  
         */}
        <Panel ref={ref => PanelHelper.setPanelReference(ref)} orientation={orientation}/>
        {/* <TouchableOpacity
          style={[
            styles.reportButton,
            { top: orientation === orientation.startsWith('PORTRAIT') ? 55 : 30 }]}
            onPress={() => this._panel.current.show(portrait ? height * 0.55 : height * 0.9)}
          >
          <View>
            <Text>📢</Text>
          </View>
        </TouchableOpacity>
        <MapView 
          style={{flex: 1 }} 
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <DrawerFst
          draggableRange={portrait ? { top: height * 0.55, bottom: 0 } : { top: height * 0.9, bottom: 0 }}
          ref={this._panel}
          orientation={orientation}
          allowDragging={portrait ? true : false}
        /> */}
      </>
    )
  }
}
