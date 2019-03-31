import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import {
  ScrollView,
  StyleSheet,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Column from '../components/column'
import C1 from '../components/c1'
import C2 from '../components/c2'
import C3 from '../components/c3'
import C4 from '../components/c4'
import C5 from '../components/c5'
import C6 from '../components/c6'
import C7 from '../components/c7'


export default class Maintanence extends React.Component {
  constructor() {
    super();
    this.labels = []
  }
  static navigationOptions = {
    title: 'Maintenance',
    headerTintColor: '#badfff',
    headerStyle: {
      backgroundColor: '#000000'
    }
  };

  createItems = () => {
    let items = ["Air filter","Brake Fluid","Brake Pads","Car Battery","Oil Change", "Tires", "Transmission fluid", "Windshield"];
    let columnSet = [];

    for (let i = 0; i < 8; i ++ ) {
      columnSet.push(
        <Column>
          title={items[i]}
          key={i}
        </Column>
      )
    }
    return columnSet
  }

  render() {
    return (
      <ScrollView style = {styles.container}>
        <Column> </Column>
        <C1></C1>
        <C2></C2>
        <C3></C3>
        <C4></C4>
        <C5></C5>
        <C6></C6>
        <C7></C7>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0,
    backgroundColor:  '#000',
  }
});
