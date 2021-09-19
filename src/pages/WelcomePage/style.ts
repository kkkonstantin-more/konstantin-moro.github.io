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

  photoContainer: {
    width: '20%',
  },

  photo: {
    width: '100%',
    height: 'auto',
    borderRadius: 4,
  },

  longReadText: {
    width: '80%',
    marginLeft: '2rem',
    fontSize: '2rem',
  },

  title: {
    fontSize: '3.5rem',
    margin: '0 auto',
    fontStyle: 'italic',
    marginBottom: '5rem',
  },

  loginButtons: {
    margin: '0 auto',
  },

  loginOptions: {
    display: 'flex',
    margin: '0 auto',
  },

  loginOption: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:first-child': {
      borderRight: '1px solid lightgrey',
    },
  },

  loginDescription: {
    marginBottom: '1rem',
  },

  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formWrapper: {
    padding: '2rem',
    width: '40rem',
  },
});
