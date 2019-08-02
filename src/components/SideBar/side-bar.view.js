import React from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import avatarImage from "../../static/images/avatar.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    marginBottom: 50,
    width: 100,
    height: 100,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
  sideBar: {
    backgroundColor: "#222",
    height: "100vh",
    borderRight: "1px solid #ccc",
    position: "fixed",
    width: "25%",
  },
  container: {
    padding: "50px",
  },
  name: {
    color: "white",
  },
  button: {
    color: "white !important",
    borderRadius: 2,
    backgroundColor: "none",
    fontWeight: 100,
    padding: "8px 30px",
    margin: "8px",
  },
  input: {
    display: "none",
  },
  menu: {
    marginTop: "50px !important",
  },
});

const SideBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <div className={classes.container}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Avatar alt="avatar" src={avatarImage} className={classes.avatar} />
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="h4" component="h5" className="primary--text">
            DAT NGUYEN
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            className="white--text font-weight-light"
          >
            FRONT-END DEVELOPER
          </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.menu}
        >
          <Button color="primary" className={classes.button}>
            About me
          </Button>
          <Button color="primary" className={classes.button}>
            Experience
          </Button>
          <Button color="primary" className={classes.button}>
            Skills & Education
          </Button>
          <Button color="primary" className={classes.button}>
            Contact
          </Button>
        </Grid>
        <Grid container justify="center" alignItems="center" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.sideBar,
});

export default connect(
  mapStateToProps,
  null
)(SideBar);
