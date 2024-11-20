import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { InputControl } from "../inputs/Inputcontrol";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Login() {
  const navegar = useNavigate();
  const [Valor, setValor] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
  const Log = () => {
    if (!Valor.email || !Valor.pass) {
      setErrorMsg("Datos incompletos ");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, Valor.email, Valor.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navegar("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Correo: "
          onChange={(event) =>
            setValor((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl
          label="Contraseña: "
          onChange={(event) =>
            setValor((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <br/>

        <div className={styles.foter}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={Log} disabled = {SubmitButtonDisabled}>iniciar sesión</button>
          <p>
            <span>
              <Link to="/signup"> crear cuenta</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
