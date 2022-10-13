import React, {useState} from 'react';
import {
  Button,
  Typography,
  TextField,
  FormControl,
  AppBar,
  CssBaseline,
  Toolbar,
  Card,
  Container,
} from "@mui/material";
import { EmojiEvents } from "@mui/icons-material";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const App = () => {

const [todos, setTodos] = useState([]);

function addTodo (todo){
  setTodos([todo, ...todos]);
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
        <div>
          <Container>
            <Typography variant="h4" align="center" gutterbottom>
              React todo tutorial
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
          </Container>

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

 
            <Button color="primary" variant="contained" align="right">
              {" "}
              Add
            </Button>
          </Card>

          <Typography variant="h4" align="left" gutterbottom>
            My Wins Today
          </Typography>
          <Typography variant="body" align="left" paragraph>
            Small Win 1
          </Typography>
        </div>
      </main>
    </div>
  );
}

export default App;