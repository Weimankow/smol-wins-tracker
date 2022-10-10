/* tutorials I followed
https://www.youtube.com/watch?v=_W3uuxDnySQ 
https://www.youtube.com/watch?v=Xoz31I1FuiY*/

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

//ReactDOM.render(
//<App />, document.getElementById('root'));