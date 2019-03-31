import React from 'react';
import { Button, ScrollView, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapContainer from '../components/MapContainer';
import ParkingNotes from '../components/ParkingNotes';
import ParkingTimer from '../components/ParkingTimer';

class ParkingScreen extends React.Component {
  static navigationOptions = {
    title: 'Parking',
  };

  render() {
    return (
      <View style={styles.container}>
        <ParkingNotes/>
        <Text>HI PEEPS</Text>
        <Button
          onPress={() => this.props.navigation.navigate("DisplayParking")}
          title="Go To Details"
        />
      </View>
    );
  }
}

class DisplayParking extends React.Component {
  static navigationOptions = {
    title: 'Parking',
  };

  render() {
    return (
      <View style={styles.container}>
        <MapContainer/>
        <ParkingTimer/>
      </View>
    );
  }
}

export default createStackNavigator({
    ParkingScreen,
    DisplayParking
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#606060',
  },
});
