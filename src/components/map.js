
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, AnimatedRegion  } from 'react-native-maps';

const LATITUDE = 37.7749;
const LONGITUDE = 122.4194;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE
      })
    }
  }

  componentWillMount() {
    /*
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          coordinate : {latitude: position.coords.latitude, longitude: position.coords.longitude}
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    */


    navigator.geolocation.getCurrentPosition(
      position => {},
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }
  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { coordinate } =   this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }
        this.setState({
          latitude,
          longitude,
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  getMapRegion = () => {
    if(this.state.latitude == null || this.state.longitude == null) {
      return {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    } else {
      return {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    }
  }

  render() {
    console.log('this.props ', this.props);
    return (
      <View style={styles.container}>
        <MapView
          showUserLocation
          showsMyLocationButton
          showsTraffic
          followUserLocation
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          region={this.getMapRegion()}
        >
        </MapView>
        <Text>Lat: {this.state.latitude}</Text>
        <Text>Long: {this.state.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
