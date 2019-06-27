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
  PORTRAIT_UP: {
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
      width: 240,
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
  LANDSCAPE_LEFT: {
    panel: {
      width: 240,
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
  LANDSCAPE_RIGHT: {
    panel: {
      width: 240,
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
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute', 
    zIndex: 1
  },
}

export default class DrawerScd extends React.PureComponent {
  constructor(props) {
    super(props);
    this._bs = React.createRef();
  }

  renderInner = () => (
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
  )

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  )

  show(toPoint) {
    this._bs.current.snapTo(toPoint)
  }

  render() {
    return (
      // <View style={[styles.panelContainer, styles[this.props.orientation].container]}>
        <BottomSheet
          ref={this._bs}
          snapPoints={[0, 100, 270]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={0}
        />
      //{/* </View> */}
    )
  }
}
