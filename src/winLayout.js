import React from 'react'
import { Delete } from "@mui/icons-material";


export function WinLayout({win, deleteWin}) {

function handleRemoveClick(){
  deleteWin(win.id);
}

  return (
    <>
      <div className="winLayout">
        <div className="time-task">
          <p>{win.time} </p>
          <p> {win.task}</p>
        </div>
        <Delete onClick={handleRemoveClick} />
      </div>
      <hr />
    </>
  );
}

