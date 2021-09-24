import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    width: '100%',
  },

  form: {
    width: '100%',
    '& > *': {
      width: '100%',
      '&:not(:last-child)': {
        marginBottom: '2rem',
      },
    },
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '4rem',
  },
});
