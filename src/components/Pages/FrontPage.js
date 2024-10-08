import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Fab,
    Hidden,
    makeStyles,
} from "@material-ui/core";
import backgroundImage from "./../../images/background.jpg";
import backgroundImage2 from "./../../images/background2.jpg";
import theme from "../../theme/theme";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ReactRotatingText from "react-rotating-text";

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
            backgroundAttachment: "scroll",
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
                top: "4rem",
                fontSize: "3.4rem",
            },
            [theme.breakpoints.up("lg")]: {
                top: "7rem",
                fontSize: "5rem",
            },
        },
        topText: {
            position: "relative",
            top: "6rem",
            margin: "0 1.4rem",
            [theme.breakpoints.down("xs")]: {
                top: "4rem",
                fontSize: "2.5rem",
            },
            [theme.breakpoints.up("lg")]: {
                top: "7rem",
                fontSize: "4rem",
            },
        },
        bottomText: {
            position: "relative",
            top: "6rem",
            margin: "0 1.4rem",
            fontSize: "1.5rem",
            [theme.breakpoints.down("xs")]: {
                top: "4rem",
                fontSize: "1.4rem",
            },
            [theme.breakpoints.up("lg")]: {
                top: "7rem",
                fontSize: "2rem",
            },
        },
        button: {
            position: "relative",
            top: "9rem",
            fontSize: "3.75rem",
            [theme.breakpoints.down("xs")]: {
                top: "6rem",
                fontSize: "3.5rem",
            },
        },
        backToTopButton: {
            position: "fixed",
            bottom: "0",
            right: "0",
            margin: "1rem",
            zIndex: "99999",
        },
        backToTopButtonMobile: {
            margin: "0.8rem",
            marginBottom: "3rem",
        },
    });
    const classes = useStyles();

    // makes the typing animation run on an infinite loop
    const [count, setCount] = useState(1);
    useEffect(() => {
        setCount(1);
    }, [count]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Box className={classes.background} id="Top">
            <Typography className={classes.topText} variant="h3" align="center">
                Hi, my name is
            </Typography>
            <Typography className={classes.name} variant="h2" align="center">
                Brianna McDonald.
            </Typography>
            <Typography className={classes.bottomText} align="center">
                <ReactRotatingText
                    items={[
                        "Software Developer ",
                        "Full Stack Web Developer ",
                        "AI Enthusiast ",
                    ]}
                    pause={800}
                />
            </Typography>
            <IconButton
                className={classes.button}
                aria-label="Scroll Down"
                onClick={() => scrollTo("AboutMe")}
            >
                <span
                    className="iconify"
                    data-icon="bi:chevron-compact-down"
                    data-inline="false"
                />
            </IconButton>
            <Hidden xsDown>
                <Fab
                    className={classes.backToTopButton}
                    variant="extended"
                    size="small"
                    aria-label="Back to Top"
                    onClick={() => scrollTo("Top")}
                >
                    <KeyboardArrowUpIcon />
                    Back to Top
                </Fab>
            </Hidden>
            <Hidden smUp>
                <Fab
                    className={`${classes.backToTopButton} ${classes.backToTopButtonMobile}`}
                    size="small"
                    aria-label="Back to Top"
                    onClick={() => scrollTo("Top")}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Hidden>
        </Box>
    );
};

export default FrontPage;
