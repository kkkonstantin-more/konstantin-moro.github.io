import createBreakpoints, { Breakpoints } from '@material-ui/core/styles/createBreakpoints';

// overwriting default interface for breakpoints
declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    // remove default
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    // add custom
    phone: true;
    tabPort: true;
    tabLand: true;
    // desk: true; default
    deskWide: true;
  }
}

export const breakpoints: Breakpoints = createBreakpoints({
  unit: 'em',
  values: {
    phone: 40.63, // 650px
    tabPort: 56.25, // 900px
    tabLand: 75, // 1200px
    deskWide: 125, // 2000px
  },
});
