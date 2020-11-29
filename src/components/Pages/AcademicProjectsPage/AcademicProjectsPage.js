import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";
import * as styles from "../../../theme/commonStyles";
import theme from "../../../theme/theme";
import thresholdingScreenshot from "./../../../images/thresholdingScreenshot.png";

import AcademicProjectsNavBar from "./AcademicProjectsNavBar";
import AcademicProject from "./AcademicProject.js";

const AcademicProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
      width: "auto",
    },
    headerText: {
      ...styles.headerText,
      marginTop: "7rem",
    },
    divider: {
      ...styles.divider,
      width: "22rem",
      paddingBottom: "0.15rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
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
    text: {
      margin: "0.35rem 1rem",
      textAlign: "center",
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    box: {
      marginTop: "1rem",
    },
    descriptionText: {
      marginBottom: "0.5rem",
    },
  });
  const classes = useStyles();

  const javascriptIcon = (
    <span
      className="iconify"
      data-icon="logos:javascript"
      data-inline="false"
      style={{ fontSize: "1.8rem", marginBottom: "0.35rem" }}
    />
  );

  const javaIcon = (
    <span
      className="iconify"
      data-icon="logos:java"
      data-inline="false"
      style={{ fontSize: "2rem" }}
    />
  );

  return (
    <Box className={classes.columnDiv} id="Projects">
      <AcademicProjectsNavBar />
      <Typography className={classes.headerText}>Academic Projects</Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.text}>
        A collection of videos and descriptions of some of my recent academic
        projects, completed during my third year of studies.
      </Typography>
      <AcademicProject
        title="Pathfinding using Q-Learning"
        icons={javascriptIcon}
        link="https://www.youtube.com/embed/IC2MfbreFiw"
        description={
          <Box className={classes.box}>
            <Typography className={classes.descriptionText}>
              I implemented a Q-learning algorithm from scratch that finds the
              shortest path to a goal from any position on the map.
            </Typography>
            <Typography className={classes.descriptionText}>
              {" "}
              The red dot is the agent, the green squares represent goals, and
              the black squares represent obstacles that the agent cannot move
              through. The markings on the white squares represent the agent's
              policy at any given time. For instance, a + shape indicates that,
              when it is on that square, it will move in any of the four
              directions with equal probability.{" "}
            </Typography>
            <Typography>
              {" "}
              The GUI was created by{" "}
              <a
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.cs.mun.ca/~dchurchill/"
              >
                David Churchill
              </a>
              .
            </Typography>
          </Box>
        }
      />
      <AcademicProject
        title="Connect 4 Bot using Minimax and Alpha-Beta Pruning"
        icons={javascriptIcon}
        link="https://www.youtube.com/embed/k6yd8LfOHPk"
        description={
          <Box className={classes.box}>
            <Typography className={classes.descriptionText}>
              A JavaScript bot that plays Connect 4, implemented using the
              Minimax algorithm with the Alpha-Beta pruning optimization. It is
              complete with a heuristic function designed to improve its
              performance.
            </Typography>
            <Typography className={classes.descriptionText}>
              The video shows various situations where the bot wins or blocks
              its opponent from winning. Note that player 1 (yellow) is the bot
              and player 2 (red) is a human player.
            </Typography>
            <Typography>
              The GUI was created by{" "}
              <a
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.cs.mun.ca/~dchurchill/"
              >
                David Churchill
              </a>
              .
            </Typography>
          </Box>
        }
      />
      <AcademicProject
        title="Pathfinding using A* Heuristic Search"
        icons={javascriptIcon}
        link="https://www.youtube.com/embed/YZEskF9r_hU"
        description={
          <Box className={classes.box}>
            <Typography className={classes.descriptionText}>
              An A* Heuristic search algorithm, complete with 4 different
              heuristic functions to choose from. Fully functional for both 4
              directional and 8 directional movement as well as with 3 different
              object sizes.{" "}
            </Typography>
            <Typography className={classes.descriptionText}>
              {" "}
              The white squares represent the path found, the red squares
              represent nodes that have already been searched, and the orange
              squares represent the nodes that will be searched next.
              Additionally, right-clicking shows all the nodes that an object of
              the selected size can reach from the current node, represented by
              pink squares.
            </Typography>
            <Typography>
              {" "}
              The GUI was created by{" "}
              <a
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.cs.mun.ca/~dchurchill/"
              >
                David Churchill
              </a>
              .
            </Typography>
          </Box>
        }
      />
      <AcademicProject
        title="Thresholding Methods"
        icons={javaIcon}
        link=""
        image={thresholdingScreenshot}
        imageTitle="Screenshot of the program's implementation of Otsu's Method on a black and white fingerprint image."
        description={
          <Box className={classes.box}>
            <Typography className={classes.descriptionText}>
              A group project for my Visual Computing course that implements
              various thresholding methods in Java.{" "}
            </Typography>
            <Typography className={classes.descriptionText}>
              {" "}
              These methods include Manual Selection Thresholding, Automatic
              Selection Thresholding, Otsu's Method, and the Adaptive Mean-C
              Approach. It also displays the histogram of the given image plus a
              bar representing the threshold value.{" "}
            </Typography>
            <Typography>
              {" "}
              The GUI along with some skeleton code was provided.
            </Typography>
          </Box>
        }
      />
    </Box>
  );
};

export default AcademicProjectsPage;
