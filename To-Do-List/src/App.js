import {
  BrowserRouter,
  Routes,
  Route,
  UNSAFE_ErrorResponseImpl,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import { TodoContext } from "./Context/todoContext";
import axios from "axios";

const { v4: randomID } = require("uuid");
randomID();
const initialToDo = [
  {
    id: randomID(),
    title: "Reading a Book",
    subtitle: "reading this book is awesome",
    isCompleted: false,
  },
  {
    id: randomID(),
    title: "Surfacing the internet",
    subtitle: "google is the best place",
    isCompleted: false,
  },
  {
    id: randomID(),
    title: "Browsing the Tor",
    subtitle: "Tor is anonymous from the government",
    isCompleted: false,
  },
];

axios
  .get("http://localhost:5004/Owner/GetFindOwnerByID?ID=9001")
  .then((response) => {
    const ownerName = response.data.ownerName;
    if (response.data.ID === 9001) {
      console.log("we got him");
    }
    console.log(ownerName);
  })
  .catch((error) => {
    console.error("fetching error : , ", error);
  });

function App() {
  const [todo, setTodo] = useState(initialToDo);
  return (
    <div
      className="App"
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        background: "#191b1f",
      }}
    >
      <TodoContext.Provider value={{ todo, setTodo }}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
