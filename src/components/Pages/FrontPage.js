import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import backgroundImage from "./../../images/background.png";

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
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    },
    name: {
      position: "relative",
      top: "6rem",
      margin: "0.5rem",
      fontWeight: "bold",
    },
    text: {
      position: "relative",
      top: "6rem",
    },
    button: {
      position: "relative",
      top: "8rem",
      fontSize: "3.75rem",
    },
  });
  const classes = useStyles();

  const scrollToAbout = () => {
    const element = document.getElementById("AboutMe");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className={classes.background}>
      <Typography className={classes.text} variant="h3">
        Hi, my name is
      </Typography>
      <Typography className={classes.name} variant="h2">
        Brianna McDonald.
      </Typography>
      <Typography className={classes.text} variant="h6">
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
