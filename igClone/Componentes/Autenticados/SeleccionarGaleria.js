// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import { Button } from 'react-native-elements';
import SeleccionarImagen from '../SeleccionarImagen';
import { actionCargarImagenAdd } from '../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';

// create a component
class SeleccionarGaleria extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagen}>
          <SeleccionarImagen
            imagen={this.props.imagen.imagen}
            cargar={this.props.cargarImagen}
            style
          />
        </View>
        <View style={styles.texto}>
          <SeleccionarGaleriaForm
            imagen={this.props.imagen.imagen}
            registro={values => console.log(values)}
          />
        </View>
        <View style={styles.boton}>
          <Button
            title="Publicar"
            onPress={() => { console.log('Publicado'); }}
          />
        </View>

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f9f9f9',
  },
  imagen: {
    flex: 2,
  },
  texto: {
    flex: 2,
  },
  boton: {
    flex: 1,

  },
});

const mapStateToProps = state => ({
  imagen: state.reducerImagenAdd,
});

const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(actionCargarImagenAdd(imagen));
    dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
