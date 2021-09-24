import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette, breakpoints }) => ({
  root: {
    display: 'flex',
    marginBottom: '4rem',
  },

  rootMobile: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
  },

  selectMobile: {
    width: '100%',
    marginBottom: '2rem',
    color: 'white',
    fontSize: '2rem',
  },

  tabs: {
    display: 'flex',
    padding: '2rem',
    margin: '2rem auto 0 auto',
    border: '1px dashed white',
    borderRadius: 4,
    alignItems: 'center',
  },

  tab: {
    textDecoration: 'none',
    marginRight: '4rem',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',

    [breakpoints.down(breakpoints.values.tabPort)]: {
      textAlign: 'center',
      textTransform: 'capitalize',
      marginRight: '3rem',
      fontSize: '1.4rem',
    },
  },

  tabSelected: {
    color: palette.primary.main,
    position: 'relative',
    '&::after': {
      content: "''",
      width: '90%',
      height: '0.2rem',
      textDecoration: 'underline',
      backgroundColor: 'white',
      position: 'absolute',
      top: '100%',
      left: '5%',
    },
  },
}));
