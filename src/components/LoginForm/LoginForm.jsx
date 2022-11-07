import { FcGoogle } from "react-icons/fc";

import { LoginFormWrapper } from "./LoginFormStyle";


const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <h3>Iniciar Sesión</h3>
      <button className="google">
        <FcGoogle style={{ fontSize: "1.5rem", marginRight: ".5rem" }} />{" "}
        Iniciar sesión con Google
      </button>
      <p>O con tu mail</p>
      <form action="">
        <input name="email" type="text" placeholder="Email" />
        <input name="user" type="text" placeholder="Usuario" />
        <input name="password" type="password" placeholder="Contraseña" />
        <button className="form-btn" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
