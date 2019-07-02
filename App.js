import React, { Component } from 'react';

import { Text, View, StatusBar, Button } from 'react-native';
import { dp2px } from './helpers/ScreenUtil';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        X: "",
        Y: "",
        touches: 0,
    };
  }

  handlePress = (evt) => {
    if(evt.nativeEvent.touches.length === 1){
      this.setState({ X: evt.nativeEvent.locationX, Y: evt.nativeEvent.locationY, touches: evt.nativeEvent.touches.length })
    } else if(evt.nativeEvent.touches.length > 1) {
      evt.nativeEvent.touches.forEach(() => {
        this.setState({ touches: evt.nativeEvent.touches.length, X: "", Y: "" })
      });
    }
  }
  render(){
    return (
        <View
        style={{ backgroundColor: '#DDDDDD', flex: 1 }}
        onResponderMove={(evt)=> {this.handlePress(evt)}} // 類似 onMouseover
        onResponderGrant={(evt)=> {this.handlePress(evt)}} // 類似 onPress
        onMoveShouldSetResponder={()=> true}
        onStartShouldSetResponder={()=> true}
        >
          <StatusBar hidden/>
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontSize: dp2px(65), fontWeight: 'bold' }}>銓鼎科技股份有限公司</Text>
            <Text style={{ fontSize: dp2px(65), fontWeight: 'bold' }}>Maxwin-Starter</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: dp2px(60) }}>{`Press Anywhere`}</Text>
            <Text style={{ fontSize: dp2px(60) }}>{`Touches: ${this.state.touches}`}</Text>
            <View style={{ flexDirection: 'row', margin: dp2px(200) }}>
              <Text style={{ fontSize: dp2px(65), flex: 1, color: 'red' }}>{`X: ${Number(this.state.X).toFixed(2)} `}</Text>
              <Text style={{ fontSize: dp2px(65), flex: 1, color: 'blue' }}>{`Y: ${Number(this.state.Y).toFixed(2)}`}</Text>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}/>
        </View>
      );
    }
}