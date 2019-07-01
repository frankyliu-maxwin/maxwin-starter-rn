import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        Press_Count: 0,
    };
  }

  _renderButton = () => {
    return <Button title="Press" onPress={()=>{ this.setState({ Press_Count: this.state.Press_Count + 1 }) }}/>
  }
  render(){
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
          <StatusBar hidden/>
          <View style={styles.top}>
            {this._renderButton()}
            {this._renderButton()}
          </View>
          <View style={styles.center}>
            <Text style={{ fontSize: 30 }}>{`Touch Count: ${this.state.Press_Count}`}</Text>
            {this._renderButton()}
          </View>
          <View style={styles.bottom}>
            {this._renderButton()}
            {this._renderButton()}
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  center: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
