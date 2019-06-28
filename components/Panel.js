import React from 'react'
import { View, Text, ScrollView, Animated } from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'
import PanelContent from './PanelContent';

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
        snappingPoints={[60, 300]}
        draggableRange={{ top: 300, bottom: 60 }}
        >
        {dragHandler => (
          <View style={styles[orientation].container}>
            <View style={styles.dragHandler} {...dragHandler}>
              <PanelContent />
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

export class PanelHelper {
  static _panel;
  static onClose;

  static setPanelReference(element) {
    this._panel = element;
  }

  // static show(type, position, component) {
  static show(position) {
    if (this._panel) {
      this._panel.show(position);
    }
  }

  static setPosition(position) {
    if (this._panel) {
      this._panel.show(position);
    }
  }

  static setOnClose(onClose) {
    this.onClose = onClose;
  }

  static dismiss() {
    if (this._panel) {
      this._panel.show(0);
    }
  }

  static onClose() {
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
  }
}

export default ScrollViewInsidePanel

