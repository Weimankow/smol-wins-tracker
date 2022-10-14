import React, { useState } from "react";
import {
  Button,
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";

import "./App.css";

const App = () => {

  //this creates a win component
  const [win, setWin] = useState({
    winEntry: "Here's a sample win",
    winTime: "11:00 PM",
  });

  //this is just for testing, will remove once code is working
  const testWin = {
    winEntry: "Here's another sample win",
    winTime: "11:00 PM",
  };

  //this is to create an array of wins, like a data sheet
  const [winArray, setwinArray] = useState([{ win }, {testWin}]);

  //this is to map a the array of wins into a wins list on the page
const winList = winArray.map(win => <p key={win}>{win}</p>)

//this is what is triggered on the on-click event, to add a win
  function addWin(event) {
    const { name, value } = event.target;
    setWin((prevWin) => ({
      ...prevWin,
      [name]: value,
    }));
  }

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <EmojiEvents />
          <Typography variant="h6">smol wins</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className="form">
          <input
            type="text"
            placeholder="What is your win today?"
            className="win-input"
            name="winEntry"
            onChange={addWin}
          />
          <div>
            <Button color="primary" variant="contained" align="right">
              {" "}
              Add
            </Button>
          </div>
        </div>

        <div className="winLayout">
          {" "}
          <div>{winList}</div>
        </div>
      </main>
      {/* 
      <main>
        <div>
    

          <Container>
            <Typography variant="h4" align="center" gutterbottom>
              Small Wins Tracker
            </Typography>
          </Container>
          <Card>
            <Typography variant="h5" align="center" gutterbottom>
              What's your win today?
            </Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="What did you do today?"
                variant="outlined"
              />
            </FormControl>

 
         
          </Card>

          <Typography variant="h4" align="left" gutterbottom>
            My Wins Today
          </Typography>
          <Typography variant="body" align="left" paragraph>
            Small Win 1
          </Typography>
        </div>
      </main> */}
    </div>
  );
};

export default App;
