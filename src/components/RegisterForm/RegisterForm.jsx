import React from "react";
import { RegisterFormWrapper } from "./RegisterFormStyles";
import { FcGoogle } from "react-icons/fc";
import swal from 'sweetalert';

import { Formik } from "formik";
import { useLocation, Link } from "react-router-dom";
import { createUser, signInWithGoogle } from "../../firebase/firebase-utils";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import useRedirect from "../../hooks/useRedirect";

const RegisterForm = () => {
  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");

  return (
    <RegisterFormWrapper>
      <h3>Registrarse</h3>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            await createUser(values.email, values.password, values.name);
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              swal({
                title: "El email encontrado ya está en uso",
                text: "Intente nuevamente",
                icon: "warning",
              })
            }
          }
          actions.resetForm();
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <button className="google" onClick={signInWithGoogle}>
              <FcGoogle style={{ fontSize: "1.5rem", marginRight: ".5rem" }} />{" "}
              Registrarse con Google
            </button>
            <p>O con tu mail</p>
            <input
              name="name"
              type="text"
              placeholder="Nombre y Apellido"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
            />
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
              Registrarse
            </button>
          </form>
        )}
      </Formik>
      <p>
        ¿Ya tenés una cuenta? Inicia sesión <Link to="/login">acá</Link>
      </p>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
