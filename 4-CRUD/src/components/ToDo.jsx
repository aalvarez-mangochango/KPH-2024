import { useState } from "react";

export function ToDo({ Todo, Delete, Toggle, Edit }) {
  const [newTitle, setnewTitle] = useState(Todo.title);
  const Change = (e) => {
    if (Todo.completed === true) {
      setnewTitle(Todo.Titulo);
    } else {
      Todo.Titulo = "";
      setnewTitle(e.target.value);
    }
  };

  return (
    <div className="To_Do">
      <input className="list"
        style={{ textDecoration: Todo.completed && "line-through" }}
        value={Todo.Titulo === "" ? newTitle : Todo.Titulo}
        onChange={Change}
      />
      <div>
        <button className="button" onClick={() => Toggle(Todo)}>
          Finalizar tarea
        </button>
        <button onClick={() => Edit(Todo, newTitle)}>Editar tarea</button>
        <button onClick={() => Delete(Todo.id)}>Eliminar tarea</button>
      </div>
    </div>
  );
}
