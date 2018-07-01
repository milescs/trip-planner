import React from 'react';

import { createBottomTabNavigator } from 'react-navigation'

import Destination from './destination.js';
import Map from './map.js';
import VehicleInfo from './vehicle-info.js'

export const AppNavigator = createBottomTabNavigator( {
    Destination: {
      screen: Destination,
      navigationOptions: {
        tabBarLabel: 'Destination'
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: 'Map'
      }
    },
    VehicleInfo: {
      screen: VehicleInfo,
      navigationOptions: {
        tabBarInfo: 'Vehicle Info'
      }
    }
  }
)

export default AppNavigator
