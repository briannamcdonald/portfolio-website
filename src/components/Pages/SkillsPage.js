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
import theme from "../../themes/theme";

const SkillsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      backgroundColor: "#e8e8e8",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    },
    rowDiv: {
      width: "70%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    divider: {
      backgroundColor: "black",
      width: "18rem",
      margin: "1rem",
      marginTop: "0",
      height: "0.12rem",
    },
    skillsTitle: {
      ...theme.typography.button,
      color: "black",
      fontSize: "1.5rem",
      marginTop: "2rem",
      textShadow: "0.1rem 0.1rem #b2dfdb",
    },
    listItemText: {
      color: "black",
      fontSize: "1.2rem",
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
    <Box className={classes.columnDiv}>
      <Typography className={classes.skillsTitle} align="center">
        My Skills & <br /> Technologies
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Box className={classes.rowDiv}>
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
            <Hidden smUp>{secondHalfList}</Hidden>
          </List>
        </Box>
        <Hidden xsDown>
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
