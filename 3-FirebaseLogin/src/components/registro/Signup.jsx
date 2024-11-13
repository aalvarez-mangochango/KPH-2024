import styles from "./Signup.module.css";
import { InputControl } from "../inputs/Inputcontrol";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function Signup() {
  const navegar = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [SubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("*llene todos los campos ");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, { displayName: values.name });

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
        <h1 className={styles.heading}>Registro</h1>

        <InputControl
          label="Nombre: "
          placeholder="Ingrese su nombre"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Correo: "
          placeholder="Ingrese su correo"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Contraseña: "
          placeholder="Ingrese su contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <br/>
        <div className={styles.foter}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={registro} disabled = {SubmitButtonDisabled}>
            guardar
          </button>
          <p>
            Si ya tienes una cuenta  
            <span>
              <Link to = "/Login"> inicia sesión</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
