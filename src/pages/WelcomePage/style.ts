import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    height: '100%',
  },

  leftSection: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  photoAndTextWrapper: {
    backgroundColor: 'white',
    borderRadius: 0,
    width: '90%',
    height: '50%',
    position: 'relative',
    margin: 'auto 0',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    marginLeft: '20rem',
  },

  yearsAndAudio: {
    marginTop: 'auto',
    fontSize: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  photo: {
    position: 'absolute',
    top: '-3rem',
    left: '4rem',
    width: '25rem',
    height: 'auto',
  },

  name: {
    fontWeight: 'bold',
    fontSize: '4rem',
  },

  infoSection: {
    width: '60%',
    marginLeft: 'auto',
    padding: '2rem',
  },

  info: {
    marginLeft: 'auto',
    fontSize: '2.5rem',
    marginBottom: '4rem',
    marginTop: '5rem',
  },

  loginButtons: {
    display: 'flex',
    '& > *:first-child': {
      marginRight: '2rem',
    },
  },

  rightSection: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    padding: '5rem 5rem 5rem 10rem',
    fontSize: '5rem',
    color: 'white',
    fontWeight: 'bold',
    margin: 'auto',
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
}));
