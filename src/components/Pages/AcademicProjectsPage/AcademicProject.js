import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "./../../../theme/theme";

const AcademicProject = (props) => {
  const useStyles = makeStyles({
    card: {
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
        width: "100%",
      },
      margin: "0 0.35rem",
    },
    title: {
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: "1rem",
    },
    image: {
      height: "100%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
    },
    iframeContainer: {
      position: "relative",
      overflow: "hidden",
      paddingTop: "56.25%",
    },
    iframe: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.div}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{props.title}</Typography>
          {props.icons}
          <br />
          {props.link !== "" ? (
            <Box className={classes.iframeContainer}>
              <iframe
                className={classes.iframe}
                title={props.title}
                id="video"
                src={props.link}
                frameBorder="0"
                allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          ) : (
            <CardMedia
              className={classes.image}
              component="img"
              image={props.image}
              title={props.imageTitle}
            />
          )}
          {props.description}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AcademicProject;
