import React from 'react';
import {
  StyleSheet, AsyncStorage, Button, Text, View,
} from 'react-native';
import Header from './Header';
import Body from './Body';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    };
  }

  componentWillMount() {
    // Se ejecuta antes del render
  }

  componentDidMount() {
    // Se ejecuta 1 vez despues de ejecutar
    // 1 vez el render
    this.recuperarDelTelefono();
  }


establecerTexto = (value) => {
  this.setState({ texto: value });
}

agregarTarea = (tarea) => {
  const nuevasTareas = [...this.state.tareas, { texto: this.state.texto.toString(), key: Date.now().toString() }];
  this.guardarEnTelefono(nuevasTareas);
  this.setState({
    tareas: nuevasTareas,
    texto: '',
  });
}

eliminarTarea = (id) => {
  // Crea un nuevo vector que va a contener a todas las
  // tareas ya existentes excepto la que queremos eliminar
  // osea cuya key sea el id que le pasamos
  const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
  // actualiza en memoria el vector sin la tarea que eliminamos
  this.guardarEnTelefono(nuevasTareas);
  // actualiza en el state el vector
  this.setState({ tareas: nuevasTareas });
}

guardarEnTelefono = (tareas) => {
  // setItem usa 2 parametros, el nombre con el que
  // se va a guardar y 2do el valor COMO STRING, en este caso ponemos
  // un JSON stringify para convertir el vector a string
  AsyncStorage.setItem('@AppCursoUdemy:tareas', JSON.stringify(tareas))
    // si encuentra algo se ejecuta then
    .then((valor) => {
      console.log(valor);
    })
    // si no encuentra nada tira error y se ejecuta catch
    .catch((error) => {
      console.log(error);
    });
}

recuperarDelTelefono = () => {
  // usamos getItem para pasarle el nombre del valor que
  // queremos recuperar
  AsyncStorage.getItem('@AppCursoUdemy:tareas')
    .then((valor) => {
      console.log(valor);
      // si el valor no es null (osea si hay algo guardado)
      // entonces hago un parse para convertirlo a vector
      // nuevamente y lo guardo en el state
      setTimeout(() => { this.setState({ cargando: false }) ;}, 5000);
      if (valor !== null) {
        const nuevasTareas = JSON.parse(valor);
        this.setState({ tareas: nuevasTareas });
      }
    })
    .catch((error) => {
      console.log(error);
      this.setState({ cargando: false });
    });
}


render() {
  return (
    <View style={styles.container}>
      <Header
        texto={this.state.texto}
        cambiarTexto={this.establecerTexto}
        agregar={this.agregarTarea}
      />
      <Body tareas={this.state.tareas} eliminarTarea={this.eliminarTarea} cargando={this.state.cargando} />
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
