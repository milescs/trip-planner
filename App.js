import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header';
import Map from './src/components/map';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff'
  },
});
