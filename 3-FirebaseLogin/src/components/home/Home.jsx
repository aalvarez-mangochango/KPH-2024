import { Link, Navigate, useNavigate } from "react-router-dom";
import {auth} from "../../firebase"

function Salir() {
  return auth.signOut()
  Navigate("/")
}

export function Home(props) {
  return (
    <div>
      <div>
        <div>
          <h1>
            <Link to="/Login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/signup">Sign up</Link>
          </h1>
        </div>
      </div>
      <h2>{props.name?`Bienvenido > ${props.name}`:"Iniciar sesión"}</h2>
      <button onClick={Salir}>Cerrar sesión</button>
    </div>
  );
}
