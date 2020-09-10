import React from "react";
import { Box, Typography, Divider, Icon, makeStyles } from "@material-ui/core";
import theme from "../../themes/theme";

import Project from "./../Project";
import toDoListScreenshot from "./../../images/ToDoListScreenshot.png";
import calculatorScreenshot from "./../../images/CalculatorScreenshot.png";

const ProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      ...theme.typography.button,
      fontSize: "1.5rem",
      marginTop: "4rem",
      textShadow: "0.1rem 0.1rem #b2dfdb",
    },
    divider: {
      backgroundColor: "black",
      width: "18rem",
      margin: "1rem",
      marginTop: "0",
      height: "0.12rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
    },
    bottomText: {
      color: "black",
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "1rem",
    },
  });
  const classes = useStyles();

  const toDoListIcons = (
    <Box className={classes.icons}>
      <Icon
        className="devicon-react-original"
        fontSize="inherit"
        style={{ marginRight: "0.3rem" }}
      />
      <span
        className="iconify"
        data-icon="simple-icons:redux"
        data-inline="false"
        style={{ fontSize: "1.5rem", margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-javascript-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-html5-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-css3-plain"
        fontSize="inherit"
        style={{ marginLeft: "0.3rem" }}
      />
    </Box>
  );

  const calculatorIcons = (
    <Box className={classes.icons}>
      <Icon
        className="devicon-react-original"
        fontSize="inherit"
        style={{ marginRight: "0.3rem" }}
      />
      <Icon
        className="devicon-javascript-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-html5-plain"
        fontSize="inherit"
        style={{ margin: "0 0.3rem" }}
      />
      <Icon
        className="devicon-css3-plain"
        fontSize="inherit"
        style={{ marginLeft: "0.3rem" }}
      />
    </Box>
  );

  return (
    <Box className={classes.columnDiv} id="Projects">
      <Typography className={classes.titleText}>Projects</Typography>
      <Divider className={classes.divider} />
      <Project
        title="To-Do List"
        icons={toDoListIcons}
        description="A to-do list application made with Reactjs and Redux. Features include the ability to sort tasks, a fully responsive design, and a dark mode and a pink mode."
        image={toDoListScreenshot}
        imageTitle="To-do List screenshot"
        projectLink="https://briannamcdonald.github.io/react-to-do-list/"
        githubLink="https://github.com/briannamcdonald/react-to-do-list"
      />
      <Project
        title="Calculator"
        icons={calculatorIcons}
        description="A simple calculator application made with Reactjs. Features include a fully responsive design and a dark mode and a pink mode."
        image={calculatorScreenshot}
        imageTitle="Calculator screenshot"
        projectLink="https://briannamcdonald.github.io/react-calculator/"
        githubLink="https://github.com/briannamcdonald/react-calculator"
      />
      <Typography className={classes.bottomText}>More coming soon!</Typography>
    </Box>
  );
};

export default ProjectsPage;
