import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./data/firebase";
import { Title } from "./components/Titulo";
import { ToDo } from "./components/ToDo";
import { AddToDo } from "./components/AddToDo";

function App() {
  const [ToDos, setToDos] = useState([]);

  useEffect(() => {
    const Q = query(collection(db, "ToDo's"));
    const unsub = onSnapshot(Q, (querySnapshot) => {
      let ToDoArray = [];
      querySnapshot.forEach((doc) => {
        ToDoArray.push({ ...doc.data(), id: doc.id });
      });
      setToDos(ToDoArray);
    });

    return () => unsub();
  }, []);

  const Edit = async (Todo, title) => {
    await updateDoc(doc(db, "ToDo's", Todo.id), { title: title });
  };

  const Delete = async (id) => {
    await deleteDoc(doc(db, "ToDo's", id));
  };

  const Toggle = async (Todo) => {
    await updateDoc(doc(db, "ToDo's", Todo.id), { completed: !Todo.completed });
  };

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddToDo />
      </div>
      <div className="ToDo_container">
        {ToDos.map((Todo) => (
          <ToDo Todo={Todo} Delete={Delete} Toggle={Toggle} />
        ))}
      </div>
    </div>
  );
}

export default App;
