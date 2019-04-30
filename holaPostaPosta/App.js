import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.caja1}>
        <Text>Hello World</Text>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}>></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  caja1: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
  caja2: {
    flex: 1,
    backgroundColor: '#90EE90',

  },
  caja3: {
    flex: 1,
    backgroundColor: '#4006400',

  },
});

export default App;
