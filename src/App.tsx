import React from 'react';
import { CssBaseline, MuiThemeProvider, Paper } from '@material-ui/core';
import { getTheme } from './theme';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './stores';
import Navigation from './pages/Navigation';
import AboutSergeyPage from './pages/AboutSergey';
import LifeThroughPhotosPage from './pages/LifeThroughPhotosPage';
import FarewellPage from './pages/FarewellPage';

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Switch>
          <Route path="/">
            <StoreProvider>
              <LoginPage />
              {/*<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>*/}
              {/*  /!*<Navigation />*!/*/}
              {/*  <div*/}
              {/*    style={{*/}
              {/*      overflow: 'auto',*/}
              {/*      width: '80%',*/}
              {/*      margin: '0 auto',*/}
              {/*      height: '100%',*/}
              {/*      marginBottom: '2rem',*/}
              {/*      padding: '4rem',*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    /!*<LoginPage />*!/*/}
              {/*    <Switch>*/}
              {/*      <Route path="/about">*/}
              {/*        <AboutSergeyPage />*/}
              {/*      </Route>*/}
              {/*      <Route path="/life-through-photos">*/}
              {/*        <LifeThroughPhotosPage />*/}
              {/*      </Route>*/}
              {/*      <Route path="/farewell">*/}
              {/*        <FarewellPage />*/}
              {/*      </Route>*/}
              {/*    </Switch>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </StoreProvider>
          </Route>
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
