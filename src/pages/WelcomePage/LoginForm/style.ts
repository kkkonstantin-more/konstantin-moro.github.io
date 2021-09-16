import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
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
  },
});