import React from 'react';

import useStyles from './style';

const Container = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default Container;
