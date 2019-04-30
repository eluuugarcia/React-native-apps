// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';


const fieldTexto = props => (
  <View style={styles.textInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType="default"
      autoCapitalize="none"
      onBlur={props.input.onBlur}
    />
    <View style={styles.linea} />
    {props.meta.touched && props.meta.error
     && <Text style={styles.errors}>{props.meta.error}</Text>}
  </View>
);

const fieldImagen = props => (
  <View>
    <View style={{ marginTop: 10 }}>
      {props.meta.touched && props.meta.error
      && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  </View>
);

const validate = (values, props) => {
  const errors = {};

  if (!props.imagen) {
    errors.imagen = 'Elige una foto para publicar';
  }

  if (values.texto && values.texto.length > 140) {
    errors.texto = 'La descripción no puede exceder los 140 caracteres';
  }

  return errors;
};


const SeleccionarGaleriaForm = props => (
  <View style={styles.containter}>
    <View style={{ flex: 7, marginBottom: 20 }}>

      <View style={{ flex: 3, marginTop: 40 }}>
        <Field name="imagen" component={fieldImagen} />
      </View>


      <View style={{ flex: 8, marginTop: 10 }}>
        <Field name="texto" component={fieldTexto} ph="Escribe una descripción" />
      </View>

    </View>


  </View>
);


const styles = StyleSheet.create({
  containter: {
    marginTop: 20,
    flex: 8,
    marginHorizontal: 65,
  },

  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,

  },
  errors: {
    color: '#FF0000',
    fontSize: 11,

  },
  field: {
    flex: 1,
  },
});


export default reduxForm({ form: 'SignUpForm', validate })(SeleccionarGaleriaForm);
