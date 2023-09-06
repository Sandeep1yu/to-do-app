import { useState } from "react";
import { Button, InputLabel, FormControl, TextField } from '@react/core';

// import { Button } from "@mui/material/Button";
// import { InputLabel } from "@mui/material/InputLabel";
// import {  FormControl} from "@mui/material/FormControl";
// import {  TextField} from "@mui/material/TextField";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
  ]);
  const [input, setInput] = useState("");

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
          <TextField id="standard-basic" value={input} label="Standard" variant="standard" onChange={eventHandler}/>
          
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
