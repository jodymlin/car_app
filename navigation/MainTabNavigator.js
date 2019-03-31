import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MyCarScreen from '../screens/MyCarScreen';
import ParkingScreen from '../screens/ParkingScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';

const MyCarStack = createStackNavigator({
  MyCar: MyCarScreen,
});

MyCarStack.navigationOptions = {
  tabBarLabel: 'MyCar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-stats'
          : 'md-stats'
      }
    />
  ),
};

const ParkingStack = createStackNavigator({
  Parking: ParkingScreen}, 
  { headerMode: 'none'
});

ParkingStack.navigationOptions = {
  tabBarLabel: 'Parking',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
    />
  ),
};

const MaintenanceStack = createStackNavigator({
  Maintenance: MaintenanceScreen,
});

MaintenanceStack.navigationOptions = {
  tabBarLabel: 'Maintenance',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-hammer' : 'md-hammer'}
    />
  ),
};

export default createBottomTabNavigator({
  MyCarStack,
  ParkingStack,
  MaintenanceStack,
},{
    tabBarOptions: {
      style: {
        backgroundColor: '#000000', 
      }
    }
  });
