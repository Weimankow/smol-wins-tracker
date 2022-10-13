/* tutorials I followed
MUI basics: https://www.youtube.com/watch?v=_W3uuxDnySQ 
Album layout with MUI: https://www.youtube.com/watch?v=Xoz31I1FuiY

React Todolist : https://www.youtube.com/watch?v=nUl5QLkVdvU

Styling a react form in MUI (this uses makestyles): https://www.youtube.com/watch?v=-XKaSCU0ZLM
Creating a form element w material UI: https://www.youtube.com/watch?v=sTdt2cJS2dg
How to link up forms fields in react MUI: https://www.youtube.com/watch?v=Lv3OhfcxjkA 
*/


import React, { StrictMode } from 'react';
import {createRoot} from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';

const theme = createTheme({
  palette: {
    primary:{
      main: "#F8CD5F"
    }
  }
})

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
