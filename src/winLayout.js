import React from 'react'
import { Delete } from "@mui/icons-material";


export function WinLayout({todo, removeTodo}) {

function handleRemoveClick(){
  removeTodo(todo.id);
}

  return (
    <>
      <div className="winLayout">
        <div className="time-task">
          <p>{todo.time} </p>
          <p> {todo.task}</p>
        </div>
        <Delete onClick={handleRemoveClick} />
      </div>
      <hr />
    </>
  );
}

