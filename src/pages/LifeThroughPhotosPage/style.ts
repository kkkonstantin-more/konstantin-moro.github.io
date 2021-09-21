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
    padding: '4rem 2rem',
    '&:not(:last-child)': {
      marginBottom: '2rem',
      borderBottom: '1px dashed lightgrey',
    },
  },

  imageContainerReverse: {
    flexDirection: 'row-reverse',
  },

  imageDescription: {
    width: '30%',
    padding: '2rem',
    borderRight: '1px solid lightgrey',
  },

  imageDescriptionReverse: {
    borderRight: 'none',
    borderLeft: '1px solid lightgrey',
  },

  photo: {
    maxWidth: '70%',
    margin: '0 auto',
  },
});
