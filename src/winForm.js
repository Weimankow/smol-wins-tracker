import React, {useState} from 'react'
import { v4 as uuid } from "uuid";
import { Button, FormControl, TextField } from "@mui/material";

function TodoForm({addTodo}) {
  
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  })
  
//this updates the task property in the todo object
  function handleTaskInputChange(e){
setTodo({...todo, task:e.target.value});
}

function handleSubmit(e) {
  e.preventDefault();
  if (todo.task.trim()){
    addTodo({...todo, id:uuid()})
    //reset task input
    setTodo({...todo, task:""});
  }
}
  return (
    <form onSubmit={handleSubmit} className="FormLayout">
    {/*   <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button> Add Win</button> */}

      <FormControl sx={{ m: 1 }}>
        <TextField
          id="outlined-basic"
          label="Fill in today's win"
          variant="outlined"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
        />
      </FormControl>

      <Button 
      color="primary" 
      variant="contained" 
      align="right"
      type="submit"
      >
        Add
      </Button>
    </form>
  );
}


export default TodoForm;