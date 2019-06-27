import React from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'

const styles = { // TODO: make me smart
  PORTRAIT: {
    container: {
      // zIndex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  PORTRAIT_UP: {
    container: {
      // zIndex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  LANDSCAPE: {
    container: {
      width: 240,
      zIndex: 1,
      backgroundColor: 'white',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginRight: 45
    },
  },
  LANDSCAPE_LEFT: {
    container: {
      width: 240,
      zIndex: 1,
      backgroundColor: 'white',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginRight: 45
    },
  },
  LANDSCAPE_RIGHT: {
    container: {
      width: 240,
      zIndex: 1,
      backgroundColor: 'white',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginRight: 45
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
  }
}

class ScrollViewInsidePanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this._panel = React.createRef();
  }

  _draggedValue = new Animated.Value(60)

  show(value){
    this._panel.current.show(value)
  }

  render() {
    const { orientation = "LANDSCAPE" } = this.props
    return (
      <SlidingUpPanel 
        ref={this._panel}
        animatedValue={this._draggedValue}
        showBackdrop={false}
        snappingPoints={[0, 300, 500]}
        >
        {dragHandler => (
          <View style={styles[orientation].container}>
            <View style={styles.dragHandler} {...dragHandler}>
              <Text>Drag handler</Text>
            </View>
            <ScrollView>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
            </ScrollView>
          </View>
        )}
      </SlidingUpPanel>
    )
  }
}

export default ScrollViewInsidePanel