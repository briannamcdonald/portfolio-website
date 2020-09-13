import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import backgroundImage from "./../../images/background.png";
import backgroundImage2 from "./../../images/background2.jpg";
import theme from "../../theme/theme";

const FrontPage = () => {
  const useStyles = makeStyles({
    background: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "95vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      [theme.breakpoints.down("xs")]: {
        backgroundImage: `url(${backgroundImage2})`,
        backgroundPosition: "left center",
        backgroundAttachment: "scroll",
      },
    },
    name: {
      position: "relative",
      top: "6rem",
      margin: "0.5rem 1rem",
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        top: "5rem",
        fontSize: "3.4rem",
      },
    },
    topText: {
      position: "relative",
      top: "6rem",
      margin: "0 1.4rem",
      [theme.breakpoints.down("xs")]: {
        top: "5rem",
        fontSize: "2.5rem",
      },
    },
    bottomText: {
      position: "relative",
      top: "6rem",
      margin: "0 1.4rem",
      [theme.breakpoints.down("xs")]: {
        top: "5rem",
        fontSize: "1.2rem",
      },
    },
    button: {
      position: "relative",
      top: "9rem",
      fontSize: "3.75rem",
      [theme.breakpoints.down("xs")]: {
        top: "7rem",
        fontSize: "3.5rem",
      },
    },
  });
  const classes = useStyles();

  const scrollToAbout = () => {
    const element = document.getElementById("AboutMe");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className={classes.background}>
      <Typography className={classes.topText} variant="h3" align="center">
        Hi, my name is
      </Typography>
      <Typography className={classes.name} variant="h2" align="center">
        Brianna McDonald.
      </Typography>
      <Typography className={classes.bottomText} variant="h6" align="center">
        Computer Science student and aspiring developer.
      </Typography>
      <IconButton
        className={classes.button}
        aria-label="Scroll Down"
        onClick={scrollToAbout}
      >
        <span
          className="iconify"
          data-icon="bi:chevron-compact-down"
          data-inline="false"
        />
      </IconButton>
    </Box>
  );
};

export default FrontPage;
