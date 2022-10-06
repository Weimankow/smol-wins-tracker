import React from 'react';
import {Button, Typography, TextField, FormControl, Box, AppBar, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
const App = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <EmojiEvents />
          <Typography variant="h6">smol wins</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container>
            <Typography variant="h4" align="center" gutterbottom>
              Small Wins Tracker
            </Typography>
          </Container>

        <Box component="span" sx={{ m:1, border: '1px solid black' }}>
            <Typography variant="h5" align="center" gutterbottom>
              What's your win today?
            </Typography>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </FormControl>

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
            <Button color="primary" variant="contained" align="right">
              {" "}
              Add
            </Button>
   
</Box>
          <Container>
            <Typography variant="h4" align="left" gutterbottom>
              My Wins Today
            </Typography>
            <Typography variant="body" align="left" paragraph>
              Small Win 1
            </Typography>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;