import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PanelHelper } from '../components/Panel';

export default class Map extends React.PureComponent {
  render() {
    return (
      <> 
        <View 
          style={{flex: 1, backgroundColor: 'deepskyblue'}} 
        /> 
        <TouchableOpacity style={[styles.reportButton, { top: 55}]} onPress={() => PanelHelper.show(300)}>
          <View>
            <Text>Show</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.reportButton, { left: 30, top: 55}]} onPress={() => this.props.navigation.navigate('ExperimentalStack')}>
          <View>
            <Text>Switch</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
