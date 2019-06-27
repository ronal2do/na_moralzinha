import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { ScreenOrientation } from 'expo'
import AppNavigator from './navigation/AppNavigator';
export default class App extends React.PureComponent {
  orListener = null;

  constructor(props) {
    super(props);
    this._panel = React.createRef();
    this._bs = React.createRef();
  }

  state = {
    orientation: 'PORTRAIT'
  }

  componentDidMount() {
    this.orListener = ScreenOrientation.addOrientationChangeListener(this.handleOrientationChange)
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
    if(this.orListener) {
      ScreenOrientation.removeOrientationChangeListeners()
    }
  }

  render() {
    const { orientation } = this.state

    if ( 
      orientation === null ||
      orientation === undefined 
      ) {
      return <ActivityIndicator/>
    }

    return (
      <>
        <AppNavigator/>
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
    position: 'relative',
    zIndex: 1,

  },
  reportButton: {
    position: 'absolute',
    zIndex: 2,
    elevation: 10,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
