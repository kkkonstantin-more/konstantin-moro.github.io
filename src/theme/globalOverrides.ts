import { CSSProperties } from 'react';

import { breakpoints } from './breakpoints';
import { palette } from './palette';

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
    height: '100%',
    fontFamily: "'Roboto', Arial, sans-serif",
    ...fontSizing,
  },

  body: {
    fontSize: '1.4rem',
    height: 'inherit',
    backgroundColor: palette.primary.light,

    // react entry element
    '& > div': {
      height: 'inherit',
    },
  },

  '*': {
    fontFamily: 'inherit',
  },
};
