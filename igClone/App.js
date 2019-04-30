import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import Store from './Store/Store';
import Seleccion from './Seleccion';

console.disableYellowBox = ['Remote debugger'];
console.disableYellowBox = ['Setting a timer'];
console.ignoredYellowBox = ['Remote debugger'];
console.ignoredYellowBox = ['Setting a timer'];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Seleccion />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
