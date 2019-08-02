import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../store";
import SideBar from "../SideBar/side-bar.view";
import Main from "../Main/main.view";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "font-awesome/css/font-awesome.min.css";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sideBar: {
    position: "sticky",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ReduxProvider store={reduxStore}>
      <div>
        <div className={classes.root}>
          <Grid container className={classes.root}>
            <Grid item xs={3} className={classes.sideBar}>
              <SideBar />
            </Grid>
            <Grid item xs={9}>
              <Main />
            </Grid>
          </Grid>
        </div>
      </div>
    </ReduxProvider>
  );
}

export default App;
