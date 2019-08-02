import React from "react";
import "./main.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import logoFsoft from "../../static/images/logo-FPT.jpg";
import logoViettel from "../../static/images/logo-Viettel.svg";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LogoReact from "../../static/images/ReactJS.png";
import LogoVue from "../../static/images/VueJS.png";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import logoNodeJS from "../../static/images/logo-nodeJS.png";
import logoPostgres from "../../static/images/logo-postgres.png";
import logoSweetSoft from "../../static/images/logo-sweetSoft.png";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import LocationIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/SettingsPhone";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const infomationOfMe = [
  {
    key: "localtion",
    value: "Thu Duc Distict",
  },
  {
    key: "phone",
    value: "(+84) 353-289-814)",
  },
  {
    key: "email",
    value: "tiendat4771@gmail.com",
  },
];

const Main = () => {
  const classes = useStyles();

  return (
    <div className="home">
      <div className="home-background">
        <div className="content">
          <div style={{ margin: "10px 10px", align: "right" }}>
            <Typography
              variant="h3"
              component=""
              className="white--text font-weight-light"
              align="right"
            >
              DAT NGUYEN
            </Typography>
          </div>
          <div>
            <Typography variant="h1" component="h1" className="primary--text">
              FRONT-END
              <br />
              DEVELOPER
            </Typography>
          </div>
        </div>
      </div>
      <div className="about-me">
        <div className="about-me__description padding50">
          <Typography
            variant="h3"
            component=""
            className="primary--text font-weight-light font-weight-400 "
            style={{ marginBottom: "20px" }}
          >
            WHO I AM
          </Typography>
          <Grid container className={classes.root} spacing={5}>
            <Grid item xs={5}>
              <Typography
                variant="h6"
                component="h6"
                className="white--text font-weight-light"
                style={{ fontSize: "0.9rem" }}
              >
                I am front-end developer that specializes in web development. My
                strong points are responsibily and learn new things fast. I
                switched from electrical and electronic to Information
                Technology(IT) side because inside me, something that makes me
                crave to prove that IT is something very powerful, where I can
                live and my decision is right. I'm living in coding. make me
                feel better :){" "}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <div>
                {infomationOfMe.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="about-me__info about-me__info__address"
                      style={{ marginTop: "7px" }}
                    >
                      <Typography
                        variant="h6"
                        component="h6"
                        className="primary--text"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {item.key.toUpperCase()}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h6"
                        className="white--text font-weight-light"
                        style={{ fontSize: "0.9rem", float: "right" }}
                      >
                        {item.value}
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="what-to-do padding50">
          <Typography
            variant="h3"
            component=""
            className="primary--text font-weight-light font-weight-400 "
            style={{ marginBottom: "20px", fontWeight: "600 !important" }}
          >
            What I can do for you.{" "}
          </Typography>
          <div style={{ width: "80%" }}>
            <ExpansionPanel square className="home">
              <ExpansionPanelSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Web Development</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography
                  className="font-weight-light"
                  style={{ fontSize: "0.9rem" }}
                >
                  I used modern frameworks like reactjs, vuejs to build
                  websites. it saves time, cost and easy mantain. easy adapt new
                  change requests. always finish assignment tasks before
                  deadline. My strong point is ' Learning Fast ' that I can
                  adapt any project with requirement skills
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square>
              <ExpansionPanelSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Design </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography
                  className="font-weight-light"
                  style={{ fontSize: "0.9rem" }}
                >
                  Many websites are missing design at beginning. Thank to Adobe
                  XD, I can make simple website design quickly, send to client a
                  make up with interactions with prototype plugins in Adobe XD.
                  In working time, I can suggest my opinions and working with
                  designer Team. Then change old design to adapt new design
                  coming.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square>
              <ExpansionPanelSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>Support</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography
                  className="font-weight-light"
                  style={{ fontSize: "0.9rem" }}
                >
                  I'm willing to help everyone when they have stuff in their
                  side. In our team, we always discuss before make decision, we
                  choose one of the best solution before coding. Keep updating
                  new knowledge. We discuss new framework will be hot in few
                  months later to prepare knowledge for next project.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
        <div className="experience padding50">
          <div>
            <Typography
              variant="h3"
              component=""
              className="primary--text font-weight-light font-weight-400 "
              style={{ marginBottom: "20px" }}
            >
              Where I've been
            </Typography>
          </div>
          <div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="5/2018 - Present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#eee" }}
                icon={
                  <img
                    src={logoFsoft}
                    alt="Logo FPT"
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Front-end Developer
                </h3>
                <Typography
                  className="font-weight-light"
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    marginTop: "5px",
                  }}
                >
                  FPT software, HCM
                </Typography>
                <Typography
                  className="font-weight-light"
                  style={{ fontSize: "0.9rem" }}
                >
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="10/2017 - 2/2018"
                iconStyle={{ background: "#fff", color: "#eee" }}
                icon={
                  <img
                    src={logoSweetSoft}
                    alt="Logo SweetSoft"
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Front-end Developer
                </h3>
                <Typography
                  className="font-weight-light"
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    marginTop: "5px",
                  }}
                >
                  SweetSoft, Nha Trang
                </Typography>
                <Typography
                  className="font-weight-light"
                  style={{ fontSize: "0.9rem" }}
                >
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="3/2017 - 6/2017"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#eee" }}
                icon={
                  <img
                    src={logoViettel}
                    alt="Logo Viettel"
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">Intership</h3>
                <Typography
                  className="font-weight-light"
                  style={{
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    marginTop: "5px",
                  }}
                >
                  VTSmart, HCM
                </Typography>
                <Typography
                  className="font-weight-light"
                  style={{ fontSize: "0.9rem" }}
                >
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
                </Typography>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
        <div className="skills-educations padding50">
          <Typography
            variant="h3"
            component=""
            className="primary--text font-weight-light font-weight-400 "
            style={{ marginBottom: "20px", fontWeight: "600 !important" }}
          >
            What I know.{" "}
          </Typography>
          <div>
            <Grid container className={classes.root} spacing={5}>
              {" "}
              <Grid item xs={6} style={{ paddingLeft: "50px" }}>
                <Typography
                  variant="h5"
                  className="primary--text font-weight-light font-weight-400 "
                  style={{ marginBottom: "20px", fontWeight: "600 !important" }}
                >
                  My Education
                </Typography>
                <Typography
                  className="font-weight-light white--text"
                  style={{ fontSize: "0.9rem" }}
                >
                  - University of Technology and Education
                </Typography>

                <Typography
                  variant="h6"
                  className="white--text font-weight-light font-weight-400 "
                  style={{
                    margin: "10px 0px",
                    fontWeight: "600 !important",
                    fontSize: "1rem",
                  }}
                >
                  - Bachelor of Electrical and Electronic Engineer
                </Typography>

                <Typography
                  className="font-weight-light white--text"
                  style={{ fontSize: "0.9rem" }}
                >
                  - Electrical and Electronic Engineer 2013- 2017
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  className="primary--text font-weight-light font-weight-400 "
                  style={{ marginBottom: "20px", fontWeight: "600 !important" }}
                >
                  My Skills
                </Typography>
                <div className="front-end">
                  <Typography
                    variant="h6"
                    className="primary--text font-weight-light font-weight-400 "
                    style={{
                      margin: "10px 0px",
                      fontWeight: "600 !important",
                      fontSize: "1rem",
                    }}
                  >
                    Front end
                  </Typography>
                  <div>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <img
                            src={LogoReact}
                            alt="REACTJS"
                            style={{ height: "25px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="ReactJS"
                          className="white--text"
                        />
                        <ListItemIcon
                          style={{ position: "absolute", left: "200px" }}
                        >
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                            style={{ margin: 0 }}
                          >
                            <Rating value="4" readOnly />
                          </Box>
                        </ListItemIcon>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <img
                            src={LogoVue}
                            alt="VueJS"
                            style={{ height: "25px" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="VueJS" className="white--text" />
                        <ListItemIcon
                          style={{ position: "absolute", left: "200px" }}
                        >
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                            style={{ margin: 0 }}
                          >
                            <Rating value="3" readOnly />
                          </Box>
                        </ListItemIcon>
                      </ListItem>
                    </List>
                  </div>
                </div>
                <div className="back-end">
                  <Typography
                    variant="h6"
                    className="primary--text font-weight-light font-weight-400 "
                    style={{
                      margin: "10px 0px",
                      fontWeight: "600 !important",
                      fontSize: "1rem",
                    }}
                  >
                    Back end
                  </Typography>
                  <div>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <img
                            src={logoNodeJS}
                            alt="NodeJS"
                            style={{ height: "25px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="NodeJS"
                          className="white--text"
                        />
                        <ListItemIcon
                          style={{ position: "absolute", left: "200px" }}
                        >
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                            style={{ margin: 0 }}
                          >
                            <Rating value="4" readOnly />
                          </Box>
                        </ListItemIcon>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <img
                            src={logoPostgres}
                            alt="Postgres"
                            style={{ height: "25px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary="Postgres"
                          className="white--text"
                        />
                        <ListItemIcon
                          style={{ position: "absolute", left: "200px" }}
                        >
                          <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                            style={{ margin: 0 }}
                          >
                            <Rating value="3" readOnly />
                          </Box>
                        </ListItemIcon>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="contacts padding50">
          <Typography
            variant="h3"
            component=""
            className="primary--text font-weight-light font-weight-400 "
            style={{ marginBottom: "20px", fontWeight: "600 !important" }}
          >
            Let's Talk.{" "}
          </Typography>
          <div>
            <Grid container className={classes.root} spacing={5}>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  className="primary--text font-weight-light font-weight-400 "
                  style={{ marginBottom: "20px", fontWeight: "600 !important" }}
                >
                  Social Contacts
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  className="primary--text font-weight-light font-weight-400 "
                  style={{ marginBottom: "20px", fontWeight: "600 !important" }}
                >
                  Personal contacts
                </Typography>
                <div>
                  <List className={classes.root}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <LocationIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Address"
                        secondary={
                          <Typography
                            variant="h6"
                            className="white--text font-weight-light font-weight-400 "
                            style={{
                              fontWeight: "600 !important",
                              fontSize: "0.8rem",
                            }}
                          >
                            Thu Duc District, Ho Chi Minh City
                          </Typography>
                        }
                        className="primary--text"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <EmailIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Mail"
                        secondary={
                          <Typography
                            variant="h6"
                            className="white--text font-weight-light font-weight-400 "
                            style={{
                              fontWeight: "600 !important",
                              fontSize: "0.8rem",
                            }}
                          >
                            tiendat4771@gmail.com
                          </Typography>
                        }
                        className="primary--text"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Phone"
                        secondary={
                          <Typography
                            variant="h6"
                            className="white--text font-weight-light font-weight-400 "
                            style={{
                              fontWeight: "600 !important",
                              fontSize: "0.8rem",
                            }}
                          >
                            (+84) 353-289-814
                          </Typography>
                        }
                        className="primary--text"
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
