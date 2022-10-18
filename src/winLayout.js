import React from 'react'
import { Delete } from "@mui/icons-material";


function winLayout({todo, removeTodo}) {

function handleRemoveClick(){
  removeTodo(todo.id);
}

  return (
    <div style={{display:"flex"}}>
      <li> {todo.task}</li>
      <Delete onClick={handleRemoveClick}/>
    </ div>
  );
}


export default winLayout;