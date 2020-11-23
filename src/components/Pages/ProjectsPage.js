import React from "react";
import { Box, Typography, Divider, Icon, makeStyles } from "@material-ui/core";
import * as styles from "../../theme/commonStyles";

import Project from "./../Project";
import toDoListScreenshot from "./../../images/ToDoListScreenshot.jpg";
import babyLizardsScreenshot from "./../../images/BabyLizardsScreenshot.png";
import sobelScreenshot from "./../../images/SobelScreenshot.png";
import calculatorScreenshot from "./../../images/CalculatorScreenshot.jpg";
import cssArtScreenshot from "./../../images/cssart.jpg";

const ProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      width: "auto",
    },
    headerText: {
      ...styles.headerText,
    },
    projectText: {
      marginTop: "5rem",
    },
    divider: {
      ...styles.divider,
    },
    projectsDivider: {
      paddingBottom: "0.15rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
    },
  });
  const classes = useStyles();

  const reactIcon = (
    <Icon
      className="devicon-react-original"
      fontSize="inherit"
      style={{ marginRight: "0.35rem" }}
    />
  );

  const reduxIcon = (
    <span
      className="iconify"
      data-icon="simple-icons:redux"
      data-inline="false"
      style={{ fontSize: "1.5rem", margin: "0 0.35rem" }}
    />
  );

  const javascriptIcon = (
    <Icon
      className="devicon-javascript-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const htmlIcon = (
    <Icon
      className="devicon-html5-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const cssIcon = (
    <Icon
      className="devicon-css3-plain"
      fontSize="inherit"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const materialUIIcon = (
    <span
      className="iconify"
      data-icon="simple-icons:material-ui"
      data-inline="false"
      style={{ margin: "0 0.35rem" }}
    />
  );

  const javaIcon = (
    <Icon 
      className="devicon-java-plain"
      fontSize="inherit" 
    />
  )

  const toDoListIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {reduxIcon}
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const babyLizardIcons = (
    <Box className={classes.icons}>
      {javaIcon}
    </Box>
  );

  const calculatorIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const cssArtIcons = (
    <Box className={classes.icons}>
      <Icon
        className="devicon-html5-plain"
        fontSize="inherit"
        style={{ marginRight: "0.35rem" }}
      />
      {cssIcon}
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`} id="Projects">
      <Typography className={`${classes.projectText} ${classes.headerText}`}>
        Projects
      </Typography>
      <Divider className={`${classes.divider} ${classes.projectsDivider}`} />
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
        title="Baby Lizards Problem Genetic Algorithm"
        icons={babyLizardIcons}
        description={<div>
          <p>A Genetic Algorithm to solve the Baby Lizards Problem, which is a twist on the classic N-Queens AI problem. Written using Java and complete with a GUI made with Java Swing that displays found solutions.</p>
          <p>Further description of the problem and my solution can be found on GitHub.</p>
        </div>}
        image={babyLizardsScreenshot}
        imageTitle="Baby Lizards Problem Genetic Algorithm screenshot"
        projectLink=""
        githubLink="https://github.com/briannamcdonald/baby-lizards-problem-GA"
      />
      <Project
        title="Sobel Edge Detection"
        icons={babyLizardIcons}
        description="A Java program that finds the edges of a given image using the Sobel operator."
        image={sobelScreenshot}
        imageTitle="Screenshot of the result of Sobel Edge Detection on an image of a flower"
        projectLink=""
        githubLink="https://github.com/briannamcdonald/sobel-edge-detection"
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
      <Project
        title="CSS Art"
        icons={cssArtIcons}
        description="A collection of drawings made with pure CSS and HTML."
        image={cssArtScreenshot}
        imageTitle="Screenshot of a CSS art drawing of Hello Kitty."
        projectLink="https://codepen.io/collection/nJwkWd"
        githubLink="https://github.com/briannamcdonald/css-art"
      />
    </Box>
  );
};

export default ProjectsPage;
