import { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button, InputLabel, FormControl, Input } from "@mui/material";
import "./App.css";
import db from "./firebase";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(()=> {
    db.collection('todos').onSnapshot(snapshot=> {
      console.log(snapshot.docs.map(doc=> doc.data().todo))
      setTodos(snapshot.docs.map(doc=> doc.data().todo));
    })
  }, [])

  const eventHandler = (event) => {
    setInput(event.target.value);
  };
  const todoHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello Sandeep Programmar</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            id="standard-basic"
            value={input}
            variant="standard"
            onChange={eventHandler}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          onClick={todoHandler}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
