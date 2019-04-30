import CONSTANTES from './CONSTANTES';

export const actionRegistro = values => ({
  type: CONSTANTES.REGISTRO,
  datos: values,
});

export const actionLogin = datos => ({
  type: CONSTANTES.LOGIN,
  datos,
});

export const actionEstablecerSesion = usuario => ({
  type: CONSTANTES.ESTABLECER_SESION,
  usuario,

});

export const actionCerrarSesion = datos => ({
  type: CONSTANTES.CERRAR_SESION,
  datos,

});

export const actionCargarImagenSignUp = imagen => ({
  type: CONSTANTES.CARGAR_IMAGEN_SIGNUP,
  imagen,
});

export const actionLimpiarImagenSignUp = () => ({
  type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP,
});

export const actionCargarImagenAdd = imagen => ({
  type: CONSTANTES.CARGAR_IMAGEN_ADD,
  imagen,
});

export const actionLimpiarImagenAdd = imagen => ({
  type: CONSTANTES.LIMPIAR_IMAGEN_ADD,
  imagen,
});
