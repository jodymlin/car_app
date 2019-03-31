import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native';

const noteInstructions = "Tap to Add Parking Notes";

export default class ParkingNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
          style={styles.inputText}
          placeholder={noteInstructions}
          onChangeText={(text) => this.setState({text})}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#303742',//'#16489a',
  },
  inputText: {
    paddingTop: 50,
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'bebas-neue',
    //height: 100,
  }
});

AppRegistry.registerComponent(
 'carapp',
 () => ParkingNotes
);
