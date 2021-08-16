import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
    )
  }
}
const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
