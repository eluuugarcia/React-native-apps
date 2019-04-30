import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Inicio from './inicio';
import Body from './body';
import Final from './final';

class App extends React.Component {

constructor() {
  super();
  this.state={
    numero: 2
  }
}

aumentar = () => {
  this.setState({
    numero: this.state.numero + 1,
  });
} 

reducir = () => {
  this.setState({
    numero: this.state.numero - 1,
  });
} 

  render() {
    return (
      <View style={styles.container}>
        <Inicio name="Calculadora"/>
    <Body numero={this.state.numero}/>
    <Final sumar={this.aumentar} restar={this.reducir}/>

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

export default App;
