import React from 'react';
import {Modal, Text, TouchableHighlight, StyleSheet, View, Alert} from 'react-native';

export default class C2 extends React.Component {
  state = {
    modalVisible: false,
    thing: "N/A",
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    var title = this.props.title
    return (
      <View style={styles.container}>
        <Modal style = {styles.container}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>
            <View>
              <Text style = {styles.ModalText}>Did you change the Brake Pads today?</Text>
              <TouchableHighlight
                onPress={() => {
                  this.state.thing = Date();
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style = {styles.optionText}>{"\n"}Yes</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style = {styles.optionText}>{"\n"}No</Text>
              </TouchableHighlight>
              <Text style = {styles.displayText}>{"\n"}{"\n"}{"\n"}Last Changed: {this.state.thing}</Text>
            </View>
          </View>
        </Modal>

        <TouchableHighlight style={styles.col}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style = {styles.contentText}> Brake Pads</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
     paddingBottom: 0,
    backgroundColor:  '#fff',
    marginTop: 0,
  },
  col: {
    flex: 1,
    paddingLeft: 5,
    backgroundColor: 'rgba(69, 149, 234, 1)'
  },
  contentText: {
    fontSize: 35,
    fontFamily: 'bebas-neue',
    color: 'rgba(255,255,255, 1)',
    lineHeight: 90,
    textAlign: 'center',
  },
  displayText: {
    fontSize: 20,
    color: 'rgba(0,0,0, 1)',
    lineHeight: 20,
    textAlign: 'center',
  },
  ModalText:
  {
    fontSize: 40,
    textShadowColor: 'rgb(255,255,255)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'bebas-neue',
    color: 'rgba(0,0,0, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
  optionText:
  {
    fontSize: 40,
    textShadowColor: 'rgb(0,0,0)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'bebas-neue',
    color: 'rgba(60,60,60, 1)',
    lineHeight: 50,
    textAlign: 'center',
  }
  });
