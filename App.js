import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/header';
import Map from './src/components/map';
import VehicleInfo from './src/components/vehicle-info';
import Destination from './src/components/destination';
import AppNavigator from './src/components/router'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderDestination: false,
      renderMap: false,
      beginCoords: null,
      endCoords: null
    }

    this.renderDestination = this.renderDestination.bind(this);
    this.renderMap = this.renderMap.bind(this);
  }

  renderDestination() {
    this.setState({ renderDestination: true });
  }

  renderMap(begin, end) {
    this.setState({ renderMap: true, beginCoords: begin, endCoords: end });
  }

  render() {
    return (
      <AppNavigator />
      /*
      <View style={styles.container}>
        <Header />
        <VehicleInfo nextStep={this.renderDestination}/>
        {this.state.renderDestination && (
          <Destination nextStep={this.renderMap}/>
        )}
        {this.state.renderMap && (
          <Map beginCoords={this.state.beginCoords} endCoords={this.state.endCoords}/>
        )}
      </View> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff'
  },
});
