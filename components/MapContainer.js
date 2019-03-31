import React from 'react';
import { Constants, Location, Permissions, MapView, Marker } from 'expo';
import { Platform,Text, View, StyleSheet } from 'react-native';
import MapLoad from './MapLoad';
import ParkingTimer from './ParkingTimer';



export default class MapContainer extends React.Component {
  state = {
    location: { coords: {latitude: 2, longitude: -12 }},
    errorMessage: null,
    isLoaded: false
  };

componentWillMount() {
  if (Platform.OS === 'android' && !Constants.isDevice) {
    this.setState({
      errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
    });
  } else {
    this._getLocationAsync();
  }
}

_getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied',
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  this.setState({
    location,
    isLoaded: true,
  });
};

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location.coords.latitude);
    }

    return this.state.isLoaded ? (
        <MapView
          style={{ flex: 1, marginBottom: 0 }}
          initialRegion= {{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,

            latitudeDelta: 0.0082,
            longitudeDelta: 0.0081,
          }}
        >
          <MapView.Marker
            coordinate={this.state.location.coords}
            title={"I Parked Here"}
            image={require('../assets/images/car_icon.png')}
          />
        </MapView>
    ) : <MapLoad/>;
  }
}
