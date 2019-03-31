import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class MapLoad extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loadText}>Loading...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  loadText: {
    textAlign: 'center',
    fontFamily: 'bebas-neue',
    fontSize: 30,
    color: '#ffffff',
  }
});
