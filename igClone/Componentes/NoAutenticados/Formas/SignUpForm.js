// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';
import { autenticacion } from '../../../Store/Servicios/Firebase';

console.disableYellowBox = ['Remote debugger'];

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

const fieldImagen = props => (
  <View>
    <View style={{ marginTop: 10 }}>
      {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  </View>
);

const validate = (values, props) => {
  const errors = {};

  if (!props.imagen) {
    errors.imagen = 'Ingrese una foto';
  }

  if (!values.nombre) {
    errors.nombre = 'Ingrese un nombre de usuario';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'El usuario debe tener al menos 5 caracteres';
  } else if (values.nombre.length > 10) {
    errors.nombre = 'El usuario debe tener menos de 10 caracteres';
  }

  if (!values.correo) {
    errors.correo = 'Ingrese un email válido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Formato de email inválido';
  }

  if (!values.password) {
    errors.password = 'Ingrese una contraseña válida';
  } else if (values.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'La contraseña debe tener menos de 15 caracteres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'Debe confirmar la contraseña';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'Las contraseñas no coinciden';
  }

  return errors;
};


const SignUpForm = props => (
  <View style={styles.containter}>
    <View style={{ flex: 7, marginBottom: 20 }}>

      <View style={styles.field}>
        <Field name="imagen" component={fieldImagen} />
      </View>

      <View style={styles.field}>
        <Field name="nombre" component={fieldNombre} ph="Nombre de usuario" />
      </View>

      <View style={styles.field}>
        <Field name="correo" component={fieldNombre} ph="Email" />
      </View>

      <View style={styles.field}>
        <Field name="password" component={fieldNombre} ph="Contraseña" />
      </View>

      <View style={styles.field}>
        <Field name="confirmacion" component={fieldNombre} ph="Confirmar contraseña" />
      </View>

    </View>
    <View style={{ flex: 1 }}>
      <Button
        buttonStyle={{ marginHorizontal: 50 }}
        title="Registrarse"
        onPress={props.handleSubmit(props.registro)}
      />

    </View>


  </View>
);


const styles = StyleSheet.create({
  containter: {
    flex: 8,


  },

  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,

  },
  errors: {
    color: '#FF0000',
    fontSize: 10,

  },
  field: {
    flex: 1,
  },
});


export default reduxForm({ form: 'SignUpForm', validate })(SignUpForm);
