import React from 'react';
import { Button, ScrollView, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MapContainer from '../components/MapContainer';
import ParkingNotes from '../components/ParkingNotes';
import ParkingTimer from '../components/ParkingTimer';
import HourPicker from '../components/HourPicker';
import MinutesPicker from '../components/MinutesPicker';
import ScrollPicker from 'react-native-wheel-scroll-picker';

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

  constructor(props) {
    super(props)
    this.state = {
      hours: 0,
      minutes: 0
    }
  }

  changeHours = (value) => {
    console.log(value)
    this.state.hours = value
  }

  changeMinutes = (value) => {
    console.log(value)
    this.state.minutes=value
  }

  render() {
    // let hpicker = React.createElement(HourPicker, { onValueChange: {e => { this.myFunction(e) }}});
    // let mpicker = React.createElement(MinutesPicker);

    return (
      <View style={styles.container}>
        <ParkingNotes />
        <View style={styles.myPickers}>
          <View style={{width: 100, backgroundColor: '#A0A0A0', marginBottom: 0, height: 100}}>
            <HourPicker 
              onValueChange={(e) => { this.changeHours(e) }} 
            />
          </View>
          <View style={{width: 100, backgroundColor: '#A0A0A0', marginBottom: 0, height: 100}}>
            <MinutesPicker 
              onValueChange={(e) => { this.changeMinutes(e) }} 
            />
          </View>
        </View>
        <Text style={styles.pickerText}>Hours                                                Minutes</Text>

        <View style={styles.myButton}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate("DisplayParking", { hours: this.state.hours, minutes: this.state.minutes })} >
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
    const { params } = this.props.navigation.state;

    this.state = {note:"", hours: params.hours, minutes: params.minutes}
  }

  componentDidUpdate( prevProps ) {
    if ( this.state.note != prevProps.state.note ) {
      console.log("there was a change!")
      // CHANGE THE TEXT DISPLAY HERE???
    }

  }

  render() {

    props = { hours: this.state.hours, minutes: this.state.minutes};
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
  myPickers: {
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pickerText: {
    fontSize: 20,
    fontFamily: 'bebas-neue',
    textAlign: 'center',
    color: '#ffffff',
    flex: 1,
  },
  buttonText: {
    fontFamily: 'bebas-neue',
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: 100,
  },
});
