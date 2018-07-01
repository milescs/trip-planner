import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: 'begin',
      end: 'end'
    }
    this.updateDestinationInfo = this.updateDestinationInfo.bind(this);
  }

  onChange(text, name) {
    this.setState({ [name]: text });
  }

  updateDestinationInfo() {
    const { begin, end } = this.state;
    this.props.nextStep(begin, end);
  }

  render() {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.headerText}
          onChangeText={e => this.onChange(e, "begin")}
          value={this.state.begin}
        />
        <TextInput
          style={styles.headerText}
          onChangeText={e => this.onChange(e, "end")}
          value={this.state.end}
        />
        <Button
          //onPress={this.updateDestinationInfo}
          onPress = {() => this.props.navigation.navigate('Map')}
          title='Continue'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 14
  }
});
