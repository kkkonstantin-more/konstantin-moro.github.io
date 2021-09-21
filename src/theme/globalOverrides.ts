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
    fontFamily: 'Montserrat, sans-serif !important',
    ...fontSizing,
  },

  body: {
    fontSize: '1.6rem',
    height: 'inherit',
    background: `linear-gradient(90deg, ${palette.primary.main} 50%, ${palette.secondary.main} 50%)`,

    // react entry element
    '& > div': {
      height: 'inherit',
    },
  },

  '*': {
    fontFamily: 'inherit',
  },
};
