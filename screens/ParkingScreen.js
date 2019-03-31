import React from 'react';
import { Button, ScrollView, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapContainer from '../components/MapContainer';
import ParkingNotes from '../components/ParkingNotes';
import ParkingTimer from '../components/ParkingTimer';

class ParkingDetails extends React.Component {
  static navigationOptions = {
    title: 'Parking',
    headerTintColor: '#badfff',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTitleStyle: {
      fontSize: 30,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <ParkingNotes/>

        <Button
          onPress={() => this.props.navigation.navigate("DisplayParking")}
          title="Park"
        />
      </View>
    );
  }
}

class DisplayParking extends React.Component {
  static navigationOptions = {
    title: 'Parking',
    headerTintColor: '#badfff',
    headerStyle: {
      backgroundColor: '#000000'
    },
    headerTitleStyle: {
      fontSize: 30,
    },
  };
  render() {
    let h = 2
    let m = 1
    props = { hours: "2", minutes: "1"};
    let timer = React.createElement(ParkingTimer, props);
    return (
      <View style={styles.container}>
        <MapContainer/>
        {timer}
      </View>
    );
  }
}

export default createStackNavigator({
  ParkingDetails: {
    screen: ParkingDetails,
  },
  DisplayParking: {
    screen: DisplayParking,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#606060',
  },
});
