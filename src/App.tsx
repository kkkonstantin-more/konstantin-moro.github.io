import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { getTheme } from './theme';
import WelcomePage from './pages/WelcomePage';
import Container from './shared/container';

const App = () => {
  return (
    <MuiThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Container>
        <WelcomePage />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
