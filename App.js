import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenOrientation } from 'expo'
import DrawerContent from './components/DrawerContent';
import DrawerFst from './components/DrawerFst';
import DrawerScd from './components/DrawerScd';

export default class App extends React.PureComponent {
  state = {
    orientation: 'PORTRAIT'
  }
  componentDidMount() {
    this.asyncBootstrap()

    this.orListener = ScreenOrientation.addOrientationChangeListener(this.handleOrientationChange)
  }

  async asyncBootstrap() {
    await ScreenOrientation.unlockAsync()
  }

  handleOrientationChange = ({ orientationInfo: {orientation } }) => {
    this.setState({ orientation }, () => console.log('Orientation changed', orientation))
  }

  getStyle = async () => {
    const a = ScreenOrientation.OrientationChangeEvent()

  }
  
  render() {
    console.log('orientation on render:', this.state.orientation)
    const { orientation } = this.state
    return (
      <View style={styles.container}> 
        <Text>Acorda porra!</Text>
        <DrawerContent />
        <DrawerFst orientation={orientation}/>
        <DrawerScd orientation={orientation}/>
        {/* <DrawerScd /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
