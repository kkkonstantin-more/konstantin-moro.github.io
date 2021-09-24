import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { getTheme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './stores';
import Grid from './pages/Grid';

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={getTheme()}>
        <CssBaseline />
        <StoreProvider>
          <Grid />
        </StoreProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
