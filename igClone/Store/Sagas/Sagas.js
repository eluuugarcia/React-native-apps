import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion } from '../Servicios/Firebase';
import { database } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';

const registroEnFireBase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnDB = ({
  uid, email, nombre, profileFotoUrl,
}) => {
  database.ref(`usuarios/${uid}`).set({
    nombre,
    email,
    profileFotoUrl,
  });
};

const registroFotoCloudinary = ({ imagen }) => {
  // const { uri, type, base64 } = imagen;
  const base64 = `data:image/jpg;base64,${imagen.base64}`;
  // Con esto obtiene solo la ultima parte de la uri
  // en donde esta el nombre de la imagen
  // const splitName = uri.split('/');
  // const name = [...splitName].pop();
  // const foto = {
  //   base64,
  //   // uri,
  //   // type,
  //   // name,
  // };

  // const formImagen = new FormData();
  // formImagen.append('upload_preset', CONSTANTES.CLOUDINARY_PRESET);
  // formImagen.append('file', foto);

  const data = {
    file: base64,
    upload_preset: CONSTANTES.CLOUDINARY_PRESET,
  };


  // fetch() hace llamadas al servidor (peticion http creo)
  return fetch(CONSTANTES.CLOUDINARY_NAME, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(async (response) => {
      const dat = await response.json();
      console.log(dat);
      return dat.secure_url;
    }).catch((err) => {
      console.log('version catch');
      console.log(err);
    });
};


function* sagaRegistro(values) {
  try {
    // cargar foto
    const imagen = yield select(state => state.reducerImagenSignUp);
    const profileFotoUrl = yield call(registroFotoCloudinary, imagen);
    console.log('urlFoto:');
    console.log(profileFotoUrl);
    const registro = yield call(registroEnFireBase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;

    yield call(registroEnDB, {
      uid, email, nombre, profileFotoUrl,
    });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFireBase = ({ correo, password }) => autenticacion.signInWithEmailAndPassword(correo, password)
  .then(success => success.user.toJSON());

function* sagaLogin(values) {
  try {
    const resultado = yield call(loginEnFireBase, values.datos);
    console.log('Resultado LOGIN: ');
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

export default
function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);

  console.log('FUNCION GENERADORAAAAAAAA');
}
