/**
 * Sample React Native Casino Roulette App 
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Roulette from 'react-native-casino-roulette';
import wheel from './images/wheel.png';
import marker from './images/marker.png';

//Roulette numbers
const numbers = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26]
const options  = numbers.map((o)=>({index:o}))  

export default class App extends Component {
  constructor(props){
    super(props);
    this.onRotate = this.onRotate.bind(this);
    this.onRotateChange = this.onRotateChange.bind(this);
    this.state={
      option:"Option selected:",
      rouletteState:'stop'
    }
  }
  render() {
    const{option, rouletteState} = this.state
    return (
      <View style={{alignItems:"center"}}>
        <Text>
          {`Option selected: ${option}`}
        </Text>
        <Text>
          {`Roulette state: ${rouletteState}`}
        </Text>
        <Roulette 
                  enableUserRotate={rouletteState=='stop'} 
                  background={wheel}
                  onRotate={this.onRotate}
                  onRotateChange={this.onRotateChange}
                  marker={marker}
                  options={options}
                  markerWidth={20} >          
        </Roulette>
 
      </View>
    );
  }

  onRotateChange(state) {
    this.setState({
      rouletteState: state
    })
  }

  onRotate(option) {
    
    this.setState({
      option:option.index
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
