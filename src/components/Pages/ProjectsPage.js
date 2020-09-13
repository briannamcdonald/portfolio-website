import React from "react";
import { Box, Typography, Divider, Icon, makeStyles } from "@material-ui/core";
import * as styles from "../../theme/commonStyles";

import Project from "./../Project";
import toDoListScreenshot from "./../../images/ToDoListScreenshot.png";
import portfolioWebsiteScreenshot from "./../../images/PortfolioWebsiteScreenshot.png";
import calculatorScreenshot from "./../../images/CalculatorScreenshot.png";
import cssArtScreenshot from "./../../images/cssart.png";

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
      marginTop: "4rem",
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
    bottomText: {
      color: "black",
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "1rem",
    },
  });
  const classes = useStyles();

  const reactIcon = (
    <Icon
      className="devicon-react-original"
      fontSize="inherit"
      style={{ marginRight: "0.3rem" }}
    />
  );

  const reduxIcon = (
    <span
      className="iconify"
      data-icon="simple-icons:redux"
      data-inline="false"
      style={{ fontSize: "1.5rem", margin: "0 0.3rem" }}
    />
  );

  const javascriptIcon = (
    <Icon
      className="devicon-javascript-plain"
      fontSize="inherit"
      style={{ margin: "0 0.3rem" }}
    />
  );

  const htmlIcon = (
    <Icon
      className="devicon-html5-plain"
      fontSize="inherit"
      style={{ margin: "0 0.3rem" }}
    />
  );

  const cssIcon = (
    <Icon
      className="devicon-css3-plain"
      fontSize="inherit"
      style={{ margin: "0 0.3rem" }}
    />
  );

  const materialUIIcon = (
    <span
      className="iconify"
      data-icon="simple-icons:material-ui"
      data-inline="false"
      style={{ margin: "0 0.3rem" }}
    />
  );

  const toDoListIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {reduxIcon}
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );

  const portfolioWebsiteIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {javascriptIcon}
      {materialUIIcon}
      {htmlIcon}
      {cssIcon}
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
      {htmlIcon}
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
        title="Portfolio Website"
        icons={portfolioWebsiteIcons}
        description="This portfolio website, created to display my projects and skills as well as other information about me."
        image={portfolioWebsiteScreenshot}
        imageTitle="Portfolio website screenshot"
        projectLink="https://briannamcdonald.github.io/portfolio-website/"
        githubLink="https://github.com/briannamcdonald/portfolio-website"
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
      <Typography className={classes.bottomText}>More coming soon!</Typography>
    </Box>
  );
};

export default ProjectsPage;
