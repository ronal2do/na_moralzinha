import React from 'react'
import {View, TouchableOpacity, Text, ScrollView, Animated} from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'

const styles = {
  PORTRAIT: {
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
  }
}

class ScrollViewInsidePanel extends React.Component {
  
  _draggedValue = new Animated.Value(120)

  render() {
    // const draggedValue = this._draggedValue.interpolate({
    //   inputRange: [bottom, top],
    //   outputRange: [0, 1],
    //   extrapolate: 'clamp'
    // })

    console.log('this.props', this.props)
    return (
      <>
        <TouchableOpacity onPress={() => this._panel.show()}>
          <View>
            <Text>Show</Text>
          </View>
        </TouchableOpacity>
        <SlidingUpPanel 
          ref={c => (this._panel = c)}
          animatedValue={this._draggedValue}
          // snappingPoints={[120, 300, 500]}
          >
          {dragHandler => (
            <View style={styles[this.props.orientation].container}>
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
      </>
    )
  }
}

export default ScrollViewInsidePanel