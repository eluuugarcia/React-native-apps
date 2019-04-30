// import liraries
import React, { Component } from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet, FlatList,
} from 'react-native';
import Tarea from './Tarea';

// create a component
class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.cargando
        && (
        <ActivityIndicator
          size="large"
          color="#000000"
        />
        )
        }
        {!this.props.cargando
        && (
        <FlatList
          data={this.props.tareas}
          renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminarTarea} />}
        />
        )}

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fabd30',
  },
});

// make this component available to the app
export default Body;
