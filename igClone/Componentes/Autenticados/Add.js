// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

// create a component
class Add extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="Seleccionar de galeria"
          onPress={() => { navigation.navigate('Seleccion'); }}
        />
        <Button
          title="Cámara"
          onPress={() => { navigation.navigate('Seleccion'); }}
        />
        <Text>Add</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
});

// make this component available to the app
export default Add;
