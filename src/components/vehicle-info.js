import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

const stateInfo = [
  'speedMultiplier',
  'cabinTemp',
  'externalTemp',
  'payload',
  'wind',
  'initialCharge',
  'bufferCharge'
];

export default class VehicleInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speedMultiplier: '1',
      cabinTemp: '72',
      externalTemp: '72',
      payload: '200',
      wind: '0',
      initialCharge: '90',
      bufferCharge: '10'
    }
  }

  onChange(text, name) {
    this.setState({ [name]: text });
  }

  render() {
    return (
      <View style={styles.vehicleInfo}>
        {stateInfo.map((name, index) =>
          <View style={styles.fieldWrapper} key={index}>
            <Text style={styles.fieldName}>{name}:</Text>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              onChangeText={e => this.onChange(e, name, true)}
              value={this.state[name]}
              maxLength={4}
            />
          </View>
        )}
        <Button
          style={styles.btn}
          //onPress={this.props.nextStep}
          onPress={() => this.props.navigation.navigate('Destination') }
          title='Next Step'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vehicleInfo: {
    alignItems: 'center'
  },
  fieldWrapper: {
    flexDirection: 'row'
  },
  fieldName: {
    fontSize: 20,
    marginRight: 7
  },
  input: {
    fontSize: 36,
    width: 100,
    textAlign: 'center',
    backgroundColor: '#D3D3D3'
  },
  btn: {
    width: 100,
    backgroundColor: '#ECF7FF'
  }
});
