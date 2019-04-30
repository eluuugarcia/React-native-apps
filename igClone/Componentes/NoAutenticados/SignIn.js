// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { actionLogin } from '../../Store/ACCIONES';
import SignInForm from './Formas/SignInForm';


// create a component
class SignIn extends Component {
  signinDeUsuario = (values) => {
    this.props.login(values);
  }


  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.signinDeUsuario} />
        <Button
          buttonStyle={styles.botonIOS}
          type="clear"
          title="Registrarse"
          onPress={() => { navigation.navigate('SignUp'); }}
        />
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
    paddingTop: 80,
  },
  botonIOS: {
    marginTop: 20,
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch(actionLogin(datos));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
