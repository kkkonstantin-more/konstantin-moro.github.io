import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {},

  imageContainers: {
    display: 'flex',
    flexDirection: 'column',
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '2rem',
    borderBottom: '1px solid lightgrey',
  },

  imageContainerReverse: {
    flexDirection: 'row-reverse',
  },

  imageDescription: {
    width: '30%',
  },

  photo: {
    maxWidth: '70%',
    margin: '0 auto',
  },
});
