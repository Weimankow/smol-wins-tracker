import React from 'react'
import { Delete } from "@mui/icons-material";


export function WinLayout({win, deleteWin}) {

// the indentation seems off here. If you setup like in our setup guide at the beginning of the bootcamp,
// then prettier and eslint will help you with auto-formating your code.
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
      {/* If you need white-space below your div, then rather use margins instead of an hr */}
      <hr />
      {/* If you use margins here, and remove the hr, then we can get rid of the fragment <> */}
    </>
  );
}

