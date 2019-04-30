import React from 'react';
import {
  Button, Image, View, TouchableOpacity,
} from 'react-native';
import { ImagePicker } from 'expo';

const SeleccionarImagen = (props) => {
  const seleccionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
    });

    if (!result.cancelled) {
      props.cargar(result);
    }
  };

  const style = {
    borderRadius: props.style ? 0 : 80,
    width: props.style ? 230 : 110,
    height: props.style ? 230 : 110,
    marginTop: 80,
  };

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={seleccionarImagen}>
        {props.imagen ? (
          <Image
            source={{ uri: props.imagen.uri }}
            style={{
              width: 110, height: 110, marginTop: 25, ...style,
            }}
          />

        ) : (
          <Image
            source={require('../assets/cat.jpg')}
            style={{
              width: 110, height: 110, marginTop: 25, ...style,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};


export default SeleccionarImagen;
