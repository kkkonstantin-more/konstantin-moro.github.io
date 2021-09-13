import { makeStyles } from '@material-ui/core';

export default makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: '80%',
    margin: '0 auto',
    backgroundColor: 'white',
    minHeight: '100%',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

    [breakpoints.down(breakpoints.values.phone)]: {
      maxWidth: '100%',
      padding: '0 1rem',
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
