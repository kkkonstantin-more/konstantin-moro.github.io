import React, { useEffect } from 'react';

import useStyles from './style';
import { observer } from 'mobx-react-lite';
import useStores from '../../stores';
import { CircularProgress } from '@material-ui/core';

const AboutSergeyPage = () => {
  const classes = useStyles();

  const { mainStore } = useStores();
  const { aboutSergeyPageText, fetchAboutSergeyPageText } = mainStore;

  useEffect(() => {
    (async () => {
      if (!aboutSergeyPageText) {
        await fetchAboutSergeyPageText();
      }
    })();
  }, []);

  if (!aboutSergeyPageText) {
    return <CircularProgress />;
  }

  const { textAboutSergey } = aboutSergeyPageText;

  return <div className={classes.root}>{textAboutSergey}</div>;
};

export default observer(AboutSergeyPage);
