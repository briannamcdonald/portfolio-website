import React from "react";
import { Box, Typography, Divider, Link, makeStyles } from "@material-ui/core";
import theme from "../../themes/theme";
import picture from "./../../images/picture.jpg";

import SkillsPage from "./SkillsPage";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
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
    aboutTitle: {
      ...theme.typography.button,
      fontSize: "1.5rem",
      marginTop: "6rem",
      textShadow: "0.1rem 0.1rem #b2dfdb",
    },
    divider: {
      backgroundColor: "black",
      width: "18rem",
      margin: "1rem",
      marginTop: "0",
      height: "0.12rem",
    },
    bodyText: {
      fontSize: "1.1rem",
      color: "black",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "1rem",
      lineHeight: "2rem",
    },
    link: {
      color: "black",
      textShadow: "1px 1px #b2dfdb",
      textDecoration: "none",
      borderBottom: "1px solid #b2dfdb",
      "&:hover": {
        color: "#b2dfdb",
        cursor: "pointer",
      },
    },
    picture: {
      maxHeight: "100%",
      maxWidth: "100%",
      margin: "1rem",
      marginBottom: "5rem",
      width: "40%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
      },
      boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
    },
  });
  const classes = useStyles();

  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Box className={classes.columnDiv} id="AboutMe">
        <Typography className={classes.aboutTitle}>About Me</Typography>
        <Divider classes={{ root: classes.divider }} />
        <Typography className={classes.bodyText}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My name is{" "}
          <b>Brianna McDonald</b> and I am a third year Computer Science honours
          student at Memorial University. I really enjoy programmming and love
          to be always learning something new. I have a strong work ethic, as
          shown by my 4.0 GPA achieved in my first two years of study, and can
          quickly pick up on new technologies. <br /> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I spend much of my
          free time working on programming projects and I have experience
          working for a non-profit organization on a web development team as a
          front-end developer. I am interested in gaining experience in
          developer roles of any kind. You can find my resume{" "}
          {/* TODO - add link */}
          <Link href="/" className={classes.link} underline="none">
            here
          </Link>{" "}
          and my contact information and links{" "}
          <Link
            onClick={scrollToContact}
            className={classes.link}
            underline="none"
          >
            here
          </Link>
          .
        </Typography>
        <Box
          component="img"
          src={picture}
          alt="A picture of me"
          className={classes.picture}
        />
      </Box>
      <SkillsPage />
    </div>
  );
};

export default AboutPage;
