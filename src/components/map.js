import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.mapContent}>Map Here!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '95%',
    margin: 10,
    backgroundColor: '#d3d3d3'
  },
  mapContent: {
    fontSize: 36
  }
});
