import React from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'

const styles = { // TODO: make me smart
  baseContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'darkgray',
    justifyContent: 'center'
  },
  PORTRAIT: {
    container: {
      // zIndex: 1,
      backgroundColor: 'yellow',
    },
  },
  PORTRAIT_UP: {
    container: {
      // zIndex: 1,
      // backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  LANDSCAPE: {
    container: {
      // zIndex: 1,
      width: 240,
      backgroundColor: 'plum',
      alignSelf: 'flex-end',
      marginRight: 15
    },
  },
  LANDSCAPE_LEFT: {
    container: {
      width: 240,
      zIndex: 1,
      // backgroundColor: 'white',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginRight: 15
    },
  },
  LANDSCAPE_RIGHT: {
    container: {
      width: 240,
      zIndex: 1,
      // backgroundColor: 'white',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      marginRight: 45
    },
  },
  // dragHandler: {
  //   alignSelf: 'stretch',
  //   height: 64,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#eaebec'
  // }
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
    const {
      animatedValue = this._draggedValue,
      draggableRange,
      orientation = "LANDSCAPE",
      snappingPoints = []
    } = this.props
    
    return (
      <SlidingUpPanel 
        ref={this._panel}
        // animatedValue={this._draggedValue}
        // animatedValue={this._draggedValue}
        showBackdrop={false}
        draggableRange={draggableRange}
        snappingPoints={snappingPoints}
        >
          <View style={[styles.baseContainer, styles[orientation].container]}>
            <Text>Here is the content inside panel</Text>
          </View>
        {/* {dragHandler => (
          
            <View style={styles.dragHandler} {...dragHandler}>
              <Text>Drag handler</Text>
            </View>
            <ScrollView>
              <Text>Here is the content inside panel</Text>
            </ScrollView>
          </View>
        )} */}
      </SlidingUpPanel>
    )
  }
}

export default ScrollViewInsidePanel