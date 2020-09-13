import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#e5ffff",
      main: "#b2dfdb",
      dark: "#82ada9",
    },
    secondary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
    },
    background: {
      default: "#eeeeee",
    },
  },
});

export default theme;
