import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Trip Planner</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 36
  }
});
