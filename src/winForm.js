import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Button, FormControl, Card, CardContent, TextField } from "@mui/material";

import { useLocalStorage } from "./hooks/useLocalStorage";




function WinsForm({ addWin }) {
  const [winLog, setWinLog] = useLocalStorage("winLog", []);

  const [win, setTodo] = useState({
    id: "",
    task: "",
    time: "",
    completed: false,
  });

    useEffect(() => {
      const winLog = JSON.parse(localStorage.getItem("winLog"));
      if (winLog) {
        setWinLog(winLog);
      }
    }, []);

  //this updates the task property in the win object
  function handleTaskInputChange(e) {
    setTodo({ ...win, task: e.target.value, time: timestamp });
  }

  /*  const date = new Date();
const timestamp = `${date.getHours()}:${date.getMinutes()}`;
Problem: this shows 9:2 instead of 9:02 
*/

/*   const date = new Date();
  const timestamp = date.toTimeString(); */

  const timestamp = new Date().toLocaleDateString('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      hour12:true,
    })
 

  function handleSubmit(e) {
    e.preventDefault();
    if (win.task.trim()) {
      addWin({ ...win, id: uuid() });
      //reset task input
      setTodo({ ...win, task: "", time: timestamp });
      console.log(timestamp);
      setWinLog([...winLog, win.task]);
    }
  }
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <form onSubmit={handleSubmit} className="FormLayout">
          <FormControl sx={{ m: 1 }}>
            <TextField
              id="outlined-basic"
              label="Fill in today's win"
              variant="outlined"
              name="task"
              type="text"
              value={win.task}
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
      </CardContent>
    </Card>
  );
}

export default WinsForm;
