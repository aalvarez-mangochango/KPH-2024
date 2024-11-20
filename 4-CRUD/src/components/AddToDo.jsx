import { useState } from "react";
import { db } from "../data/firebase";
import { collection, addDoc } from "firebase/firestore";

export function AddToDo() {
  const [Titulo, setTitulo] = useState([]);
  const Insertar = async (e) => {
    e.preventDefault();

    if (Titulo !== "") {
      await addDoc(collection(db, "ToDo's"), {
        Titulo,
        completed: false,
      });
      setTitulo("");
    }
  };

  return (
    <form onSubmit={Insertar}>
      <div className="input_container">
        <input className="txt"
          type="text"
          placeholder="Ingresar tarea..."
          value={Titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>
            Insertar
        </button>
      </div>
      <br/>
    </form>
  );
}
