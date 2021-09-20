import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { getTheme } from './theme';
import LoginPage from './pages/WelcomePage';
import Container from './shared/container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './stores';

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={getTheme()}>
        <CssBaseline />
        {/*<Container>*/}
        <Switch>
          <Route path="/">
            <StoreProvider>
              <LoginPage />
            </StoreProvider>
          </Route>
        </Switch>
        {/*</Container>*/}
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
