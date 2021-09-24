import { CSSProperties } from 'react';

import { breakpoints } from './breakpoints';

import imgSrc from '../assets/background-img.jpg';

const fontSizing: CSSProperties = {
  fontSize: '62.5%', // 10px

  [breakpoints.up(breakpoints.values.deskWide)]: {
    fontSize: '75%', // 12px
  },

  [breakpoints.down(breakpoints.values.tabLand)]: {
    fontSize: '56.25%', // 9px
  },

  [breakpoints.down(breakpoints.values.tabPort)]: {
    fontSize: '50%', // 8px
  },

  [breakpoints.down(breakpoints.values.phone)]: {
    fontSize: '45%', // 7px
  },
};

export const globalOverrides = {
  html: {
    fontFamily: 'Montserrat, sans-serif',
    ...fontSizing,
    minHeight: '100vh',
  },

  body: {
    fontSize: '1.6rem',
    minHeight: '100vh',
    backgroundImage: `url('${imgSrc}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    // react entry element
    '& > div': {
      height: 'inherit',
    },
  },

  '*': {
    fontFamily: 'inherit',
  },
};
