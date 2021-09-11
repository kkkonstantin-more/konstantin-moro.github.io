import { createTheme, Theme, ThemeOptions } from '@material-ui/core/styles';

import { breakpoints } from './breakpoints';
import { overrides } from './overrides';
import { typography } from './typography';

export function getTheme(options?: ThemeOptions): Theme {
  const defaultThemeOptions: ThemeOptions = {
    breakpoints,
    typography,
    overrides,
  };

  return createTheme({
    ...defaultThemeOptions,
    ...(options ?? {}),
  });
}
