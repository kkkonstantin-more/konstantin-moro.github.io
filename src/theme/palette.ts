import { PaletteColor } from '@material-ui/core/styles/createPalette';

export const palette: { primary: PaletteColor; secondary: Pick<PaletteColor, 'main'> } = {
  primary: {
    main: '#FFF',
    light: '#C5CAE9',
    dark: '#303F9F',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: '#3F51B5',
  },
};
