import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) => ({
  root: {
    display: 'flex',
    marginBottom: '2rem',
  },

  tabs: {
    display: 'flex',
    padding: '2rem',
    margin: '2rem auto 0 auto',
    backgroundColor: 'white',
  },

  tab: {
    textDecoration: 'none',
    marginRight: '4rem',
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  tabSelected: {
    color: palette.primary.dark,
  },
}));
