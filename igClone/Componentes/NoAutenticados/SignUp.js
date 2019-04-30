// import liraries
import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { blur, change } from 'redux-form';
import { Button } from 'react-native-elements';
import SignUpForm from './Formas/SignUpForm';
import {
  actionRegistro, actionCargarImagenSignUp, actionLimpiarImagenSignUp,
} from '../../Store/ACCIONES';
import SeleccionarImagen from '../SeleccionarImagen';


// create a component
class SignUp extends Component {
  componentWillMount() {
    this.props.limpiarImagen();
  }

  registroDeUsuario = (values) => {
    this.props.registro(values);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
        <SignUpForm registro={this.registroDeUsuario} imagen={this.props.imagen.imagen} />
        <View style={{ flex: 2 }}>
          <Button
            buttonStyle={styles.botonIOS}
            type="clear"
            title="Iniciar Sesión"
            onPress={() => navigation.goBack()}
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
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 46,
    paddingTop: 25,
  },
  botonIOS: {
    marginTop: 8,
  },


});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
  imagen: state.reducerImagenSignUp,
});

const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch(actionRegistro(values));
  },
  cargarImagen: (imagen) => {
    // dispatch({ type: CONSTANTES.CARGAR_IMAGEN_SIGNUP, imagen });
    dispatch(actionCargarImagenSignUp(imagen));
    // Esto lo que hace es ejecutar la funcion de validacion cuando
    // se carga la imagen, porque sino sigue mostrando que es requerida
    // y no actualiza
    dispatch(blur('SignUpForm', 'imagen', Date.now()));
  },
  limpiarImagen: () => {
    // dispatch({ type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP });
    dispatch(actionLimpiarImagenSignUp());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
