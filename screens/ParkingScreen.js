import React from 'react';
import { Button, ScrollView, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapContainer from '../components/MapContainer';
import ParkingNotes from '../components/ParkingNotes';
import ParkingTimer from '../components/ParkingTimer';

class ParkingDetails extends React.Component {
  static navigationOptions = {
    title: 'Parking',
    headerTintColor: '#badfff',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTitleStyle: {
      fontFamily: 'bebas-neue',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <ParkingNotes />
          <View style={styles.myButton}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate("DisplayParking")} >
              <Text style={styles.buttonText}>Press to Park</Text>
            </TouchableNativeFeedback>
          </View>
      </View>
    );
  }
}

class DisplayParking extends React.Component {
  static navigationOptions = {
    title: 'Car Location',
    headerTintColor: '#badfff',
    headerStyle: {
      backgroundColor: '#000000'
    },
  };

  constructor(props) {
    super(props);
    this.state = {note:""}
  }

  componentDidUpdate( prevProps ) {
    if ( this.state.note != prevProps.state.note ) {
      console.log("there was a change!")
      // CHANGE THE TEXT DISPLAY HERE???
    }

  }

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
    display: 'flex',
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#303742', //original:'#16489a',
  },
  myButton: {
    width: 300,
    backgroundColor: 'rgba(69, 149, 234, 1)',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
  buttonText: {
    fontFamily: 'bebas-neue',
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: 100,
  },
});
