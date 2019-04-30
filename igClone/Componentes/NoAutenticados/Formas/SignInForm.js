// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';


const fieldNombre = props => (
  <View style={styles.textInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!((props.input.name === 'password' || props.input.name === 'confirmacion'))}
      onBlur={props.input.onBlur}
    />
    <View style={styles.linea} />
    {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
  </View>
);

const validate = (values) => {
  const errors = {};

  if (!values.correo) {
    errors.correo = 'Ingrese un email válido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Email invalido';
  }

  if (!values.password) {
    errors.password = 'Ingrese una contraseña válida';
  } else if (values.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'La contraseña debe tener menos de 15 caracteres';
  }

  return errors;
};


const SignInForm = props => (
  <View>
    <Field name="correo" component={fieldNombre} ph="Email" />
    <Field name="password" component={fieldNombre} ph="Contraseña" />
    <Button
      buttonStyle={{ marginTop: 25, marginHorizontal: 50 }}
      title="Iniciar Sesión"
      onPress={props.handleSubmit(props.login)}
    />
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 70,
  },
  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
  boton: {
    color: '#fff',
  },
});

export default reduxForm({ form: 'SignInForm', validate })(SignInForm);
