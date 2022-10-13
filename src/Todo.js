import React from 'react'
import { Delete } from "@mui/icons-material";


function Todo({todo}) {
  return (
    <div className="task-row">
      <input type="checkbox" />
      <li> {todo.task}</li>
      <Delete />
    </div>
  );
}


export default Todo;