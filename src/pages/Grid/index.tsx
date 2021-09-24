import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import LoginPage from '../LoginPage';
import Navigation from '../Navigation';
import Container from '../../shared/container';
import AboutSergeyPage from '../AboutSergey';
import useStores from '../../stores';
import { observer } from 'mobx-react-lite';
import EmptyPage from '../EmptyPage';

// import useStyles from './style';

const Grid = () => {
  // const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  const { mainStore } = useStores();
  const { userData } = mainStore;

  useEffect(() => {
    if (userData && pathname === '/') {
      history.push('/about');
    }
  }, []);

  return (
    <>
      {pathname !== '/' && <Navigation />}
      <Switch>
        <Route path="/" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/about" exact={true}>
          <Container>
            <AboutSergeyPage />
          </Container>
        </Route>
        <Route path="/life-through-photos" exact={true}>
          <Container>
            <EmptyPage />
          </Container>
        </Route>
        <Route path="/farewell" exact={true}>
          <Container>
            <EmptyPage />
          </Container>
        </Route>
        <Route path="/memories" exact={true}>
          <Container>
            <EmptyPage />
          </Container>
        </Route>
        <Route path="/without-sergey" exact={true}>
          <Container>
            <EmptyPage />
          </Container>
        </Route>
      </Switch>
    </>
  );
};

export default observer(Grid);
