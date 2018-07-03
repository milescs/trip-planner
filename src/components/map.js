import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE  } from 'react-native-maps';
import { buildApiString } from "./doe-api"
import axios from "axios/index"

const LATITUDE = 37.7749;
const LONGITUDE = 122.4194;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      prevLatLng: {},
      coordinate: { latitude: LATITUDE, longitude: LONGITUDE },
      apiData: {}
    }
  }

  callApi(apiString) {
    let self = this
    axios.get(apiString)
      .then((response) => self.setState( { apiData: response.data } ))
      .catch((error) => console.log(error))
  }

  getLevel3StationsNearMe(zip) {
    let apiOptions = { zip,
                      ev_charging_level: "dc_fast" }
    let apiString = buildApiString(apiOptions)

    this.callApi(apiString)
  }

  componentDidMount() {
    this.getLevel3StationsNearMe("95687")
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const oldCoordinate = this.state.coordinate
        const newCoordinate = { latitude: position.coords.latitude, longitude: position.coords.longitude }

        this.setState({
          prevLatLng: oldCoordinate,
          coordinate: newCoordinate
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
        latitude: this.state.coordinate.latitude,
        longitude: this.state.coordinate.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    }
  }

  render() {
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
          <Marker coordinate={this.state.coordinate}></Marker>
        </MapView>
        <Text>Lat: {this.state.coordinate.latitude}</Text>
        <Text>Long: {this.state.coordinate.longitude}</Text>
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
