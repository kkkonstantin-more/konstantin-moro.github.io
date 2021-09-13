import { createTheme, Theme, ThemeOptions } from '@material-ui/core/styles';

import { breakpoints } from './breakpoints';
import { overrides } from './overrides';
import { typography } from './typography';
import { palette } from './palette';

export function getTheme(options?: ThemeOptions): Theme {
  const defaultThemeOptions: ThemeOptions = {
    breakpoints,
    typography,
    overrides,
    palette,
  };

  return createTheme({
    ...defaultThemeOptions,
    ...(options ?? {}),
  });
}
