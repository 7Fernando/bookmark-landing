import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Rubik', monospace` };
 
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const brand = {
  softBlue: "#5368df",
  softRed: "#fa5757",
  grayishBlue: "#9194a1",
  veryDarkBlue: "#252b46",
};
const theme = extendTheme({
  breakpoints,
  colors: { brand },
});

export default theme;
