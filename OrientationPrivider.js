import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ScreenOrientation } from 'expo'

export default class OrientationProvider  extends React.PureComponent {
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
    const { orientation } = this.state
    const { children } = this.props
    
    if ( 
      orientation === null ||
      orientation === undefined 
      ) {
      return <ActivityIndicator/>
    }

    return children(orientation)
  }
}
