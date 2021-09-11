import { Overrides } from '@material-ui/core/styles/overrides';

import { globalOverrides } from './globalOverrides';

export const overrides: Overrides = {
  MuiSvgIcon: {
    fontSizeLarge: {
      fontSize: '3.4rem',
    },

    fontSizeSmall: {
      fontSize: '2rem',
    },
  },

  MuiCssBaseline: {
    '@global': globalOverrides,
  },
};
