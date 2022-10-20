import React, { useState, useEffect } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  GlobalStyles,
} from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import WinsForm from "./winForm";
import WinList from "./winList";
import "./App.css";


const App = () => {
  const [winList, setWinList] = useState([]);




  function deleteWin(id) {
    setWinList(winList.filter((win) => win.id !== id));
  }

  function addWin(win) {
    setWinList([win, ...winList]);
  }

  return (
    <div>
      <CssBaseline />
      <GlobalStyles
        styles={{ body: { backgroundColor: "rgb(249, 246, 229)" } }}
      />
      <AppBar position="relative">
        <Toolbar>
          <EmojiEvents />
          <Typography variant="h6">smol wins</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container>
            <Container disablegutters sx={{ mb: 3, ml: 0, pl: 0 }}>
              <Typography
                variant="h4"
                align="left"
                gutterbottom
                className="header"
              >
                Small Wins Tracker
              </Typography>
              <Typography variant="body" align="left" gutterbottom>
                Remind yourself how much you've done by tracking your
                small wins throughout the day.
              </Typography>
            </Container>
            <WinsForm addWin={addWin} />

            <Typography
              variant="h5"
              align="left"
              gutterbottom
              className="list-header"
            >
              My Wins Today
            </Typography>
            <Container
              maxWidth="sm"
              className="win-list"
              sx={0}
              disableGutters={true}
            >
              <WinList winList={winList} deleteWin={deleteWin} />
            </Container>
          </Container>
          {/* 

          <Container>
            <Typography variant="h5" align="center" gutterbottom>
              What's your win today?
            </Typography>
            <Typography variant="h5" align="center" gutterbottom>
              Which identity did it strengthen?
            </Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </FormControl>
 */}
        </div>
      </main>
    </div>
  );
};

export default App;
