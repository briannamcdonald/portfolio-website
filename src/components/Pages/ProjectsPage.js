import React, { useState } from "react";
import {
    Box,
    Typography,
    Divider,
    Button,
    makeStyles,
} from "@material-ui/core";
import * as styles from "../../theme/commonStyles";

import Project from "./../Project";
import RoutingProject from "./../RoutingProject";
import toDoListGif from "./../../images/ToDoListGif.gif";
import babyLizardsScreenshot from "./../../images/BabyLizardsScreenshot.png";
import academicProjectScreenshot from "./../../images/academicProjectScreenshot.png";
import sobelScreenshot from "./../../images/SobelScreenshot.png";
import calculatorGif from "./../../images/calculatorGif.gif";
import cssArtScreenshot from "./../../images/cssart.jpg";
import gdmcGif from "./../../images/gdmcGif.gif";
import covidGif from "./../../images/covidGif.gif";
import hackFrostGif from "./../../images/hackFrostGif.gif";

const ProjectsPage = () => {
    const useStyles = makeStyles({
        columnDiv: {
            ...styles.columnDiv,
            width: "auto",
        },
        headerText: {
            ...styles.headerText,
            marginTop: "5rem",
        },
        divider: {
            ...styles.divider,
            paddingBottom: "0.15rem",
        },
        icons: {
            fontSize: "1.5rem",
            display: "flex",
            width: "100%",
            margin: "0.5rem 0",
            gap: "0.7rem",
        },
        button: {
            margin: "0.5rem",
            marginTop: "1rem",
            backgroundColor: "#347f78",
            color: "white",
            boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            "&:hover": {
                backgroundColor: "#409b93",
            },
        },
    });
    const classes = useStyles();

    const [showMore, setShowMore] = useState(false);

    const reactIcon = (
        <span
            className="iconify"
            data-icon="logos:react"
            data-inline="false"
            style={{ fontSize: "1.5rem" }}
        />
    );

    const reduxIcon = (
        <span
            className="iconify"
            data-icon="logos:redux"
            data-inline="false"
            style={{ fontSize: "1.5rem" }}
        />
    );

    const javascriptIcon = (
        <span
            className="iconify"
            data-icon="logos:javascript"
            data-inline="false"
            style={{ fontSize: "1.6rem" }}
        />
    );

    const htmlIcon = (
        <span
            className="iconify"
            data-icon="vscode-icons:file-type-html"
            data-inline="false"
            style={{ fontSize: "1.7rem" }}
        />
    );

    const cssIcon = (
        <span
            className="iconify"
            data-icon="vscode-icons:file-type-css"
            data-inline="false"
            style={{ fontSize: "1.7rem" }}
        />
    );

    const javaIcon = (
        <span
            className="iconify"
            data-icon="logos:java"
            data-inline="false"
            style={{ fontSize: "1.7rem" }}
        />
    );

    const pythonIcon = (
        <span
            className="iconify"
            data-icon="logos:python"
            data-inline="false"
            style={{ fontSize: "1.7rem" }}
        ></span>
    );

    const nodeIcon = (
        <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Nodejs Icon"
            style={{
                width: "1.7rem",
                height: "1.7rem",
            }}
        />
    );

    const mongodbIcon = (
        <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB Icon"
            style={{
                width: "1.7rem",
                height: "1.7rem",
            }}
        />
    );

    const cPlusPlusIcon = (
        <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            alt="C++ Icon"
            style={{
                width: "1.7rem",
                height: "1.7rem",
            }}
        />
    );

    const gdmcIcon = <Box className={classes.icons}>{pythonIcon}</Box>;

    const toDoListIcons = (
        <Box className={classes.icons}>
            {reactIcon}
            {reduxIcon}
            {javascriptIcon}
            {htmlIcon}
            {cssIcon}
        </Box>
    );

    const babyLizardIcons = <Box className={classes.icons}>{javaIcon}</Box>;

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
            <span
                className="iconify"
                data-icon="vscode-icons:file-type-html"
                data-inline="false"
                style={{ fontSize: "1.7rem" }}
            />
            {cssIcon}
        </Box>
    );

    const academicProjectsIcons = (
        <Box className={classes.icons}>
            {javaIcon}
            {javascriptIcon}
            {cPlusPlusIcon}
        </Box>
    );

    const covidTrackerIcons = (
        <Box className={classes.icons}>
            {reactIcon}
            {nodeIcon}
            {mongodbIcon}
            {javascriptIcon}
            {htmlIcon}
            {cssIcon}
        </Box>
    );

    return (
        <Box className={classes.columnDiv} id="Projects">
            <Typography className={classes.headerText}>Projects</Typography>
            <Divider className={classes.divider} />
            <Project
                title="NL Life - 2nd Place Winner at Hack Frost NL Hackathon&nbsp;🥈"
                icons={calculatorIcons}
                description="A demo virtual tourism platform for Newfoundland. Created using Reactjs for the Hack Frost NL Hackathon in 2021 where my team came in 2nd place out of 30+ teams."
                image={hackFrostGif}
                imageTitle="Hack Frost Demo screenshot"
                link1="https://nl-life.vercel.app/"
                link2="https://github.com/briannamcdonald/virtual-tourism-nl"
                buttonText1="Live Demo"
                buttonText2="GitHub"
            />
            <Project
                title="Generative Design in Minecraft Competition Entry"
                icons={gdmcIcon}
                description={
                    <span>
                        Python code that builds a procedurally generated
                        Minecraft village. The algorithm places houses in flat
                        areas of the given terrian, creates walkable paths
                        between them, and then places a fence and other
                        decorative items around the village.
                        <br /> It adapts to the terrain by adjusting the block
                        types to match different biomes, avoiding large height
                        changes in paths, and placing platforms above water.
                    </span>
                }
                image={gdmcGif}
                imageTitle="Generative Design in Minecraft Competition screenshot"
                link1=""
                link2="https://www.youtube.com/watch?v=eSV2Y1DuTAw"
                buttonText1=""
                buttonText2="YouTube Video"
            />
            <Project
                title="To-Do List"
                icons={toDoListIcons}
                description="A to-do list application made with Reactjs and Redux. Features include the ability to sort tasks, a fully responsive design, and a dark mode and a pink mode."
                image={toDoListGif}
                imageTitle="To-do List screenshot"
                link1="https://briannamcdonald.github.io/react-to-do-list/"
                link2="https://github.com/briannamcdonald/react-to-do-list"
                buttonText1="Live Demo"
                buttonText2="GitHub"
            />
            <Project
                title="COVID-19 & Economic Tracker"
                icons={covidTrackerIcons}
                description="A data visualization application that allows you to compare COVID-19 and economic data from each of the provinces of Canada or Canada as a whole. Created using Reactjs and Chakra UI for the front-end and Nodejs and MongoDB for the back-end."
                image={covidGif}
                imageTitle="COVID-19 & Economic Tracker screenshot"
                link1="https://github.com/briannamcdonald/covid-19-and-economic-tracker"
                link2=""
                buttonText1="GitHub"
            />
            <RoutingProject
                title="Academic Projects"
                icons={academicProjectsIcons}
                description="A collection of videos and descriptions of some of my recent academic projects, completed during my third year of studies. Includes artifical intelligence and image processing projects."
                image={academicProjectScreenshot}
                imageTitle="Pathfinding using A* Heuristic Search screenshot"
                route="/academic-projects"
                buttonText="Link"
            />
            {!showMore && (
                <Button
                    className={classes.button}
                    onClick={() => setShowMore(!showMore)}
                >
                    See More Projects
                </Button>
            )}
            {showMore && (
                <Box>
                    <Project
                        title="Sobel Edge Detection"
                        icons={babyLizardIcons}
                        description="A Java program that finds the edges of a given image using the Sobel operator."
                        image={sobelScreenshot}
                        imageTitle="Screenshot of the result of Sobel Edge Detection on an image of a flower"
                        link1=""
                        link2="https://github.com/briannamcdonald/sobel-edge-detection"
                        buttonText2="GitHub"
                    />
                    <Project
                        title="Baby Lizards Problem Genetic Algorithm"
                        icons={babyLizardIcons}
                        description={
                            <span>
                                A Genetic Algorithm to solve the Baby Lizards
                                Problem, which is a twist on the classic
                                N-Queens AI problem. Written using Java and
                                complete with a GUI made with Java Swing that
                                displays found solutions. <br /> Further
                                description of the problem and my solution can
                                be found on GitHub.
                            </span>
                        }
                        image={babyLizardsScreenshot}
                        imageTitle="Baby Lizards Problem Genetic Algorithm screenshot"
                        link1=""
                        link2="https://github.com/briannamcdonald/baby-lizards-problem-GA"
                        buttonText2="GitHub"
                    />
                    <Project
                        title="Calculator"
                        icons={calculatorIcons}
                        description="A simple calculator application made with Reactjs. Features include a fully responsive design and a dark mode and a pink mode."
                        image={calculatorGif}
                        imageTitle="Calculator screenshot"
                        link1="https://briannamcdonald.github.io/react-calculator/"
                        link2="https://github.com/briannamcdonald/react-calculator"
                        buttonText1="Live Demo"
                        buttonText2="GitHub"
                    />
                    <Project
                        title="CSS Art"
                        icons={cssArtIcons}
                        description="A collection of drawings made with pure CSS and HTML."
                        image={cssArtScreenshot}
                        imageTitle="Screenshot of a CSS pixel art drawing of a kitten."
                        link1="https://codepen.io/collection/nJwkWd"
                        link2="https://github.com/briannamcdonald/css-art"
                        buttonText1="Codepen"
                        buttonText2="GitHub"
                    />
                </Box>
            )}
        </Box>
    );
};

export default ProjectsPage;
