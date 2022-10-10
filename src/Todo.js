import React from 'react'
import { Delete } from "@mui/icons-material";


function Todo({todo}) {
  return (
    <div style={{display:"flex"}}>
      <input type="checkbox" />
      <li> {todo.task}</li>
      <Delete />
    </ div>
  );
}


export default Todo;