import React from 'react';
import Time from 'react-time'
import { StyleSheet, Text } from 'react-native';

export default class ParkingTimer extends React.Component {
  render() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return (
      <Text>Date: {"Thu Jul 18 2013 15:48:59 GMT+0400"}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#606060',
  },
  myText: {
    fontSize: 17,
    color: 'rgba(240,240,240, 1)',
    lineHeight: 100,
    textAlign: 'center',
  },
});
