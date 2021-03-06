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
        {/* 
          This Panel can be renamed to PanelBuild or PanelProvider,
          I just put it in topLevel to show it being accessed from other places in the app
          PanelHelper.show()  
         */}
        <Panel ref={ref => PanelHelper.setPanelReference(ref)} orientation={orientation}/>
      </>
    )
  }
}
