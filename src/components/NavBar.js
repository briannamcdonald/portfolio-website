import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const useStyles = makeStyles({
    appBar: {
      background: "primary",
      color: "black",
    },
    drawerPaper: {
      width: "80%",
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

  const appBarButtons = (
    <div style={{ display: "flex", marginLeft: "auto", alignItems: "center" }}>
      <Button className={classes.button}>About Me</Button>
      <Button className={classes.button}>Projects</Button>
      <Button className={classes.button}>Contact</Button>
    </div>
  );

  const sideDrawer = (
    <div style={{ display: "flex", marginLeft: "auto", alignItems: "center" }}>
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
        <List>
          {["ABOUT ME", "PROJECTS", "CONTACT"].map((text, index) => (
            <ListItem button key={text}>
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
    </div>
  );

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.text}>
          Brianna McDonald
          <span role="img" aria-label="sparkle emoji" className={classes.span}>
            ✨
          </span>
        </Typography>
        <Hidden xsDown>{appBarButtons}</Hidden>
        <Hidden smUp>{sideDrawer}</Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
