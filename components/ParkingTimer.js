import React from 'react';
import Time from 'react-time'
import { StyleSheet, Text, View } from 'react-native';

export default class ParkingTimer extends React.Component {
  constructor(props){
    super(props)
    this.hours = parseInt(props.hours, 10)
    this.mins = parseInt(props.minutes, 10)

    this.state = {
      start: Date.now(),
      time: 0,
      hours: parseInt(props.hours, 10),
      mins: parseInt(props.minutes, 10),
      seconds: 0
    }
    this.timer = setInterval(() => this.tick(), 1);  
  }
  tick() {
    let timePassed = Date.now() - this.state.start
    let secondsPassed = Math.floor(this.state.time/1000)
    let totalOrigMins = 60*this.hours + this.mins
    let minsPassed = Math.ceil(secondsPassed/60)
    this.setState({
      time: timePassed,
      seconds: (60-secondsPassed%60)%60,
      hours: this.hours - (minsPassed < this.mins ? 0 : Math.ceil((minsPassed-this.mins)/60)),
      mins: (totalOrigMins - minsPassed)%60
    })
  }
  render() {
    return(
      <Text style={styles.myText}>{this.state.hours}h {this.state.mins}m {this.state.seconds}s left</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#606060',
  },
  myText: {
    fontSize: 30,
    color: 'rgba(240,240,240, 1)',
    lineHeight: 100,
    textAlign: 'center',
  },
});
