import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';


const RutasNoAut = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,

      },
    },
    SignUp: {
      screen: SignUp,

    },
  },

);

const RutasNoAutenticadas = createAppContainer(RutasNoAut);

export { RutasNoAutenticadas };
