import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography, Link, IconButton, Divider } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import theme from "../themes/theme";

const ContactPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.92)",
      position: "relative",
      bottom: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "1rem",
    },
    rowDiv: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      ...theme.typography.button,
      color: "#eeeeee",
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "0.5rem",
    },
    divider: {
      backgroundColor: "#eeeeee",
      width: "18rem",
      margin: "1rem",
      marginTop: "0",
      height: "0.12rem",
    },
    emailText: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    link: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    icon: {
      color: "#eeeeee",
      margin: "0.5rem",
    },
    github: {
      fontSize: "2.2rem",
    },
    linkedIn: {
      fontSize: "2.7rem",
    },
    twitter: {
      fontSize: "2.5rem",
    },
  });
  const classes = useStyles();

  const icons = (
    <Box className={classes.rowDiv} id="Contact">
      <IconButton
        className={classes.icon}
        aria-label="LinkedIn Link"
        onClick={() =>
          window.open("https://www.linkedin.com/in/briannamcdonald/")
        }
      >
        <LinkedInIcon className={classes.linkedIn} />
      </IconButton>
      <IconButton
        className={classes.icon}
        aria-label="GitHub link"
        onClick={() => window.open("https://github.com/briannamcdonald/")}
      >
        <GitHubIcon className={classes.github} />
      </IconButton>
      <IconButton
        className={classes.icon}
        aria-label="Twitter link"
        onClick={() => window.open("https://twitter.com/Brianna_Codes")}
      >
        <TwitterIcon className={classes.twitter} />
      </IconButton>
    </Box>
  );

  return (
    <Box className={classes.columnDiv}>
      <Typography className={classes.headerText}>Contact Me</Typography>
      <Divider classes={{ root: classes.divider }} />
      <Box className={classes.rowDiv}>
        <Typography className={classes.emailText}>
          Email:&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <Link href="mailto: brmcdonald@mun.ca" className={classes.link}>
          brmcdonald@mun.ca
        </Link>
      </Box>
      {icons}
    </Box>
  );
};

export default ContactPage;
