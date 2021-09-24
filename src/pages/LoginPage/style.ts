import { makeStyles } from '@material-ui/core';

export default makeStyles(({ breakpoints }) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: "'Marck Script', cursive",
    position: 'relative',
    color: 'white',
    overflow: 'auto',

    [breakpoints.down(breakpoints.values.tabLand)]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  songContainer: {
    right: '2rem',
    top: '2rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '2.4rem',
    position: 'absolute',
  },

  leftSection: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [breakpoints.down(breakpoints.values.tabLand)]: {
      width: '100%',
    },
  },

  photo: {
    width: '60%',
    maxHeight: '100%',
    height: 'auto',
    border: '0.5rem solid black',

    [breakpoints.down(breakpoints.values.tabLand)]: {
      marginTop: '8rem',
      width: '50%',
    },
  },

  rightSection: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '4rem',

    [breakpoints.down(breakpoints.values.tabLand)]: {
      width: '100%',
    },
  },

  title: {
    fontSize: '5rem',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: '4rem',

    [breakpoints.down(breakpoints.values.tabPort)]: {
      textAlign: 'center',
    },
  },

  info: {
    marginLeft: 'auto',
    fontSize: '3rem',
    marginBottom: '6rem',
    marginTop: '5rem',
    color: 'white',

    [breakpoints.down(breakpoints.values.tabPort)]: {
      textAlign: 'center',
    },
  },

  loginButtons: {
    display: 'flex',
    '& > *:first-child': {
      marginRight: '2rem',
    },
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
