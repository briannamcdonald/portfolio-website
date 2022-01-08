import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const Footer = () => {
    const useStyles = makeStyles({
        div: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.2rem",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
        },
        text: {
            color: "#eeeeee",
        },
    });
    const classes = useStyles();

    return (
        <Box className={classes.div}>
            <Typography className={classes.text}>
                {new Date().getFullYear()} © Brianna McDonald
            </Typography>
        </Box>
    );
};

export default Footer;
