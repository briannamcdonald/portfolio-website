import React from "react";
import { Box, Typography, Divider, Link, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/picture.jpg";

import SkillsPage from "./SkillsPage.js";

const AboutPage = () => {
    const useStyles = makeStyles({
        columnDiv: {
            ...styles.columnDiv,
        },
        mainDiv: {
            [theme.breakpoints.down("xl")]: {
                width: "45%",
            },
            [theme.breakpoints.down("lg")]: {
                width: "50%",
            },
            [theme.breakpoints.down("md")]: {
                width: "60%",
            },
            [theme.breakpoints.down("sm")]: {
                width: "80%",
            },
            [theme.breakpoints.down("xs")]: {
                width: "90%",
            },
            margin: "0 auto",
        },
        headerText: {
            ...styles.headerText,
        },
        aboutText: {
            marginTop: "6rem",
        },
        divider: {
            ...styles.divider,
        },
        bodyText: {
            fontSize: "1.1rem",
            color: "black",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "1rem",
            marginBottom: "0.02rem",
            lineHeight: "1.6rem",
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
            margin: "2rem",
            marginBottom: "6rem",
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

    const scrollToProjects = () => {
        const element = document.getElementById("Projects");
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <Box
                className={`${classes.columnDiv} ${classes.mainDiv}`}
                id="AboutMe"
            >
                <Typography
                    className={`${classes.aboutText} ${classes.headerText}`}
                >
                    About Me
                </Typography>
                <Divider classes={{ root: classes.divider }} />
                <Typography className={classes.bodyText}>
                    My name is <b>Brianna McDonald</b> and I'm a fourth year
                    Computer Science Honours student at Memorial University
                    living in Newfoundland, Canada.{" "}
                </Typography>
                <Typography className={classes.bodyText}>
                    {" "}
                    I really enjoy programmming and love to be always learning
                    something new. I have a strong work ethic, as shown by my
                    4.0 GPA, and I can quickly pick up on new technologies.{" "}
                </Typography>
                <Typography className={classes.bodyText}>
                    {" "}
                    I'm currently doing an internship at{" "}
                    <Link
                        href="https://www.compusult.com/"
                        target="_blank"
                        className={classes.link}
                        underline="none"
                    >
                        Compusult Limited
                    </Link>{" "}
                    where I'm working on projects related to AI, computer
                    vision, software development, and full stack web
                    development. I also have eight months of previous experience
                    as a front-end web developer and I like creating my own
                    programming projects in my spare time.
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
