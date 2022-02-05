import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  makeStyles,
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import resumePdf from "../documents/BriannaMcDonaldResume.pdf";

const NavBar = () => {
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
    drawerPaper: {
      width: "60%",
      backgroundColor: "#eeeeee",
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
    listItemText: {
      fontSize: "0.9rem",
      fontWeight: "500",
    },
  });
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const getLink = (input) => {
    let words = input.split(" ");
    let linkWords = [];
    words.forEach((element) => {
      linkWords.push(
        element[0].toUpperCase() +
          element.slice(1, element.length).toLowerCase()
      );
    });
    return linkWords.join("");
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const appBarButtons = (
    <Box className={classes.div}>
      <Link
        href={resumePdf}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button className={classes.button}>Resume</Button>
      </Link>
      <Button className={classes.button} onClick={() => scrollTo("AboutMe")}>
        About Me
      </Button>
      <Button className={classes.button} onClick={() => scrollTo("Projects")}>
        Projects
      </Button>
      <Button className={classes.button} onClick={() => scrollTo("Contact")}>
        Contact
      </Button>
    </Box>
  );

  const sideDrawer = (
    <Box className={classes.div}>
      <Drawer
        variant="temporary"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List onClick={handleDrawerToggle}>
          <ListItem button component="a" target="_blank" key="Resume" href={resumePdf}>
            <ListItemText
                primary="RESUME"
                classes={{ primary: classes.listItemText }}
              />
          </ListItem>
          {["ABOUT ME", "PROJECTS", "CONTACT"].map((text, index) => (
            <ListItem
              button
              component="a"
              key={text}
              href={"#" + getLink(text)}
            >
              <ListItemText
                primary={text}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={handleDrawerToggle}>
        <MenuRoundedIcon />
      </IconButton>
    </Box>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.text}>
          Brianna McDonald
          <span role="img" aria-label="sparkle emoji" className={classes.span}>
            ✨
          </span>
        </Typography>
        <Hidden smDown>{appBarButtons}</Hidden>
        <Hidden mdUp>{sideDrawer}</Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
