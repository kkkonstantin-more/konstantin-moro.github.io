import { makeStyles } from '@material-ui/core';

export default makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: '80%',
    margin: '0 auto',

    [breakpoints.down(breakpoints.values.phone)]: {
      maxWidth: '100%',
      padding: '0 2rem',
    },

    [breakpoints.down(breakpoints.values.tabLand)]: {
      maxWidth: 800,
    },

    [breakpoints.down(breakpoints.values.tabPort)]: {
      maxWidth: 650,
    },

    [breakpoints.up(breakpoints.values.deskWide)]: {
      maxWidth: 1320,
    },
  },
}));
