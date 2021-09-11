import React from 'react';
import { Container, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { getTheme } from './theme';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <MuiThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Container>
        <LoginPage />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
