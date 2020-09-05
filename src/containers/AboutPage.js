import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";
import theme from "../themes/theme";
import picture from "./../images/picture.jpg";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      width: "50%",
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
    blockDiv: {
      display: "block",
      width: "100%",
    },
    title: {
      ...theme.typography.button,
      fontSize: "1.5rem",
      marginTop: "2rem",
    },
    divider: {
      backgroundColor: "black",
      width: "18rem",
      margin: "1rem",
      marginTop: "0",
      height: "0.12rem",
    },
    bodyText: {
      fontSize: "1rem",
      color: "black",
      maxWidth: "100%",
      maxHeight: "100%",
      textAlign: "justify",
      display: "inline",
      margin: "1rem",
      lineHeight: "2rem",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.columnDiv} id="About">
      <Typography className={classes.title}>About Me</Typography>
      <Divider classes={{ root: classes.divider }} />
      <Box className={classes.blockDiv}>
        <img
          src={picture}
          alt="A picture of me"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            float: "left",
            margin: "1rem",
            marginBottom: "0.2rem",
            width: "50%",
            borderRadius: "10%",
            border: "0.12rem solid black",
          }}
        />
        <Typography className={classes.bodyText}>
          Hi! My name is Brianna McDonald and I am a third year Computer Science
          honours student. I enjoy learning and problem-solving. I have a strong
          work ethic, as shown by my 4.0 GPA, and can quickly pick up on new
          technologies. Also, I have experience working on a web development
          team as a front-end developer.
        </Typography>
      </Box>
      <Typography className={classes.title} align="center">
        My Skills & <br /> Technologies
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Box className={classes.rowDiv}>
        <Box className={classes.columnDiv}>
          <ul style={{ fontSize: "1rem", margin: "1rem" }}>
            <li>Reactjs</li>
            <li>Redux & React Hooks</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Chakra UI & Material UI</li>
          </ul>
        </Box>
        <Box className={classes.columnDiv}>
          <ul style={{ fontSize: "1rem", margin: "1rem" }}>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>Terminal</li>
            <li>Git</li>
            <li>Jira</li>
            <li>VSCode</li>
          </ul>
        </Box>
      </Box>
      <Typography align="center">
        <span style={{ fontWeight: "bold" }}>Currently learning: </span>
        JavaScript
      </Typography>
    </Box>
  );
};

export default AboutPage;
