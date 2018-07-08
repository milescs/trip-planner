import React from 'react';
import { StyleSheet, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Header from './src/components/header';
import Map from './src/components/map';
import VehicleInfo from './src/components/vehicle-info';
import Destination from './src/components/destination';


const navConfig = {
  navigation: {
    VehicleInfo: {
      screen: VehicleInfo
    },
    Destination: {
      screen: Destination
    },
    Map: {
      screen: Map,
    }
  }
}

export const AppNavigator = createStackNavigator(navConfig.navigation);
AppRegistry.registerComponent('tripPlanner', () => AppNavigator);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      beginCoords: null,
      endCoords: null
    }
  }

  render() {
    return (

      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff'
  },
});
