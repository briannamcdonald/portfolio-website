import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Icon,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import theme from "./../../theme/theme";
import * as styles from "../../theme/commonStyles";

const SkillsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      backgroundColor: "#e8e8e8",
      margin: "0 auto",
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    rowDivider: {
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "70%",
      },
    },
    divider: {
      ...styles.divider,
    },
    headerText: {
      ...styles.headerText,
    },
    skillsText: {
      marginTop: "2rem",
    },
    listItemText: {
      color: "black",
      fontSize: "1.2rem",
      margin: "0 1rem",
    },
    bottomText: {
      color: "black",
      fontSize: "1.2rem",
      margin: "0.5rem",
      marginBottom: "2rem",
    },
    icon: {
      color: "black",
      fontSize: "2rem",
    },
  });
  const classes = useStyles();

  const secondHalfList = (
    <div>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-python-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="Python"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-java-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="Java"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-c-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText primary="C" classes={{ primary: classes.listItemText }} />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Icon className="devicon-git-plain" fontSize="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="Git"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="ion:terminal"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Terminal"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="file-icons:vscode"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="VSCode"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
    </div>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography
        className={`${classes.skillsText} ${classes.headerText}`}
        align="center"
      >
        My Skills & <br /> Technologies
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Box className={`${classes.rowDiv} ${classes.rowDivider}`}>
        <Box className={classes.columnDiv}>
          <List>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <Icon className="devicon-react-original" fontSize="inherit" />
              </ListItemIcon>
              <ListItemText
                primary="Reactjs"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <span
                  className="iconify"
                  data-icon="simple-icons:redux"
                  data-inline="false"
                  style={{ fontSize: "2rem" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Redux & React Hooks"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <Icon className="devicon-html5-plain" fontSize="inherit" />
              </ListItemIcon>
              <ListItemText
                primary="HTML"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <Icon className="devicon-css3-plain" fontSize="inherit" />
              </ListItemIcon>
              <ListItemText
                primary="CSS"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <span
                  className="iconify"
                  data-icon="simple-icons:material-ui"
                  data-inline="false"
                  style={{ fontSize: "2rem" }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Chakra UI & Material UI"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <Hidden mdUp>{secondHalfList}</Hidden>
          </List>
        </Box>
        <Hidden smDown>
          <Box className={classes.columnDiv}>
            <List>{secondHalfList}</List>
          </Box>
        </Hidden>
      </Box>
      <Typography align="center" className={classes.bottomText}>
        <span style={{ fontWeight: "bold" }}>Currently learning: </span>
        JavaScript
      </Typography>
    </Box>
  );
};

export default SkillsPage;
