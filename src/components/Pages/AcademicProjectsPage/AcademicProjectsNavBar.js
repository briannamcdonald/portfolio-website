import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  Box,
  makeStyles,
} from "@material-ui/core";

const AcademicProjectsNavBar = () => {
  const useStyles = makeStyles({
    div: {
      display: "flex",
      marginLeft: "auto",
      alignItems: "center",
    },
    appBar: {
      background: "primary",
      color: "black",
    },
    button: {
      background: "inherit",
      borderRadius: 3,
      color: "black",
      height: 40,
      padding: "0 1rem",
      margin: "0 0.5rem",
      fontSize: "0.9rem",
    },
    text: {
      fontSize: "1.2rem",
    },
    span: {
      textShadow: "1px 1px rgba(0, 0, 0, 0.3)",
    },
  });
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.text}>
          Brianna McDonald
          <span role="img" aria-label="sparkle emoji" className={classes.span}>
            ✨
          </span>
        </Typography>
        <Box className={classes.div}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Hidden xsDown>
              <Button className={classes.button}>
                Back to Portfolio Website
              </Button>
            </Hidden>
            <Hidden smUp>
              <Button className={classes.button}>Go Back</Button>
            </Hidden>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AcademicProjectsNavBar;
