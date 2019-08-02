import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#fffff",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
