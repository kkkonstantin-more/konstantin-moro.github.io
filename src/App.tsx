import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { getTheme } from './theme';
import WelcomePage from './pages/WelcomePage';
import Container from './shared/container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Container>
          <Switch>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>
        </Container>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
