import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import BottomSheet from 'reanimated-bottom-sheet'

const styles = {
  PORTRAIT: {
    panel: {
      padding: 20,
      backgroundColor: '#f7f5eee8',
    },
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  LANDSCAPE: {
    panel: {
      height: 200,
      padding: 20,
      backgroundColor: '#f7f5eee8',
    },
    container: {
      width: 240,
      zIndex: 1,
      backgroundColor: 'white',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginRight: 30
    },
  },
  // container: {
  //   width: 240,
  //   zIndex: 1,
  //   backgroundColor: 'white',
  //   alignSelf: 'flex-end',
  //   justifyContent: 'center',
  //   marginRight: 30
  // },
  dragHandler: {
    alignSelf: 'stretch',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#318bfb',
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },

}

export default class DrawerScd extends React.Component {
  
  renderInner = () => (
    <View style={styles[this.props.orientation].container}>
      <View style={styles[this.props.orientation].panel}>
        <Text style={styles.panelTitle}>San Francisco Airport</Text>
        <Text style={styles.panelSubtitle}>
          International Airport - 40 miles away
        </Text>
        <View style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Directions</Text>
        </View>
        <View style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Search Nearby</Text>
        </View>
      </View>
    </View>
  )

  renderHeader = () => (
    <View style={styles[this.props.orientation].container}>
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    </View>
  )

  render() {
    return (
      <>
        <TouchableOpacity onPress={() => this.bs.snapTo(1)}>
          <View>
            <Text>Show</Text>
          </View>
        </TouchableOpacity>
        <BottomSheet
          ref={e=> this.bs = e}
          snapPoints={[0, 300, 600]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={0}
        />
      </>
    )
  }
}
