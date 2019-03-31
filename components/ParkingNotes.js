import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, KeyboardAvoidingView } from 'react-native';

const noteInstructions = "Enter Parking Notes \n\t\tex: Level 2 North";

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
    backgroundColor: '#606060',
  },
  inputText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    //height: 100,
  }
});

AppRegistry.registerComponent(
 'carapp',
 () => ParkingNotes
);
