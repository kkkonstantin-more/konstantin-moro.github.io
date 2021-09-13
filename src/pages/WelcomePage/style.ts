import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
  },

  photoAndText: {
    display: 'flex',
    marginBottom: '4rem',
  },

  photo: {
    width: '20%',
    height: 'auto',
    borderRadius: 4,
  },

  longReadText: {
    flexGrow: 1,
    marginLeft: '2rem',
    fontSize: '2rem',
  },

  title: {
    fontSize: '3.5rem',
    margin: '0 auto',
    fontStyle: 'italic',
    marginBottom: '3rem',
  },

  loginButtons: {
    margin: '0 auto',
  },

  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formWrapper: {
    padding: '2rem',
    minWidth: '40rem',
  },
});
