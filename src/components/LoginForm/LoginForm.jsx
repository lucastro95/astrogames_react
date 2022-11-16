import { FcGoogle } from "react-icons/fc";

import {Link} from 'react-router-dom'

import { LoginFormWrapper } from "./LoginFormStyle";
import { Formik } from 'formik';
import {
  createUserProfileDocument,
  signInUser,
  signInWithGoogle,
} from '../../firebase/firebase-utils';
import { loginInitialValues, loginValidationSchema } from '../../formik';
import useRedirect from '../../hooks/useRedirect';


const LoginForm = () => {
  useRedirect('/');

  return (
    <LoginFormWrapper>
      <h3>Iniciar Sesión</h3>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          try {
            const { user } = await signInUser(values.email, values.password);
            createUserProfileDocument(user);
          } catch (error) {
            if (error.code === 'auth/wrong-password') {
              alert('Contraseña incorrecta');
            }
            if (error.code === 'auth/user-not-found') {
              alert('Usuario no encontrado');
            }
          }
        }}
      ></Formik>
      <button className="google" onClick={signInWithGoogle}>
        <FcGoogle style={{ fontSize: "1.5rem", marginRight: ".5rem" }} />{" "}
        Iniciar sesión con Google
      </button>
      <p>O con tu mail</p>
      <form action="">
        <input name="email" type="text" placeholder="Email" />
        <input name="password" type="password" placeholder="Contraseña" />
        <button className="form-btn" type="submit">
          Iniciar Sesión
        </button>
      </form>
      <p>¿No tenés una cuenta? Registrate <Link to='/register'>acá</Link></p>
    </LoginFormWrapper>
  );
};

export default LoginForm;
