import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import MapContainer from '../components/MapContainer';
import ParkingNotes from '../components/ParkingNotes';

export default class ParkingScreen extends React.Component {
  static navigationOptions = {
    title: 'Parking',
  };

  render() {
    return (

          <MapContainer/>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
});
