import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";
import swal from 'sweetalert';

import { LoginFormWrapper } from "./LoginFormStyle";
import { Formik } from "formik";
import {
  createUserProfileDocument,
  signInUser,
  signInWithGoogle,
} from "../../firebase/firebase-utils";
import { loginInitialValues, loginValidationSchema } from "../../formik";
import useRedirect from "../../hooks/useRedirect";

const LoginForm = () => {
  useRedirect("/");

  return (
    <LoginFormWrapper>
      <h3>Iniciar Sesión</h3>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          try {
            const { user } = await signInUser(values.email, values.password);
            createUserProfileDocument(user);
          } catch (error) {
            if (error.code === "auth/wrong-password") {
              swal({
                title: "Contraseña incorrecta",
                text: "Intente nuevamente",
                icon: "error",
              })
            }
            if (error.code === "auth/user-not-found") {
              swal({
                title: "Usuario no encontrado",
                text: "Intente nuevamente",
                icon: "error",
              })
            }
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <button className="google" onClick={signInWithGoogle}>
              <FcGoogle style={{ fontSize: "1.5rem", marginRight: ".5rem" }} />{" "}
              Iniciar sesión con Google
            </button>
            <p>O con tu mail</p>
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
            />
            <button className="form-btn" type="submit">
              Iniciar Sesión
            </button>
          </form>
        )}
      </Formik>
      <p>
        ¿No tenés una cuenta? Registrate <Link to="/register">acá</Link>
      </p>
    </LoginFormWrapper>
  );
};

export default LoginForm;
