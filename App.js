import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './js/Home';
import MoodScreen from './js/screens/MoodScreen'

const App = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Mood: { screen: MoodScreen },
  },
);

module.exports = App;
