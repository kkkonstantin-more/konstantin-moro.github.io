import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {},

  tabs: {
    marginBottom: '2rem',
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > *:not(:last-child)': {
      marginBottom: '2rem',
    },
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },

  alert: {
    fontSize: '1.4rem',
  },
});
