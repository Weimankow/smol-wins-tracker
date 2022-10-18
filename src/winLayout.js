import React from 'react'
import { Delete } from "@mui/icons-material";


function winLayout({todo}) {
  return (
    <div style={{display:"flex"}}>
      <li> {todo.task}</li>
      <Delete />
    </ div>
  );
}


export default winLayout;