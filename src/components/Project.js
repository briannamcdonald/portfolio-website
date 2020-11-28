import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import theme from "../theme/theme";

const Project = (props) => {
  const useStyles = makeStyles({
    card: {
      width: "60%",
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "75%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
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
    button: {
      margin: "0.5rem",
      backgroundColor: "#b2dfdb",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
      "&:hover": {
        backgroundColor: "#a9d4d0",
      },
    },
    buttonDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    image: {
      height: "100%",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
    },
    text: {
      margin: "0.5rem 0",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.div}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={
            props.link1 !== ""
              ? () => window.open(props.link1)
              : () => window.open(props.link2)
          }
        >
          <CardContent>
            <Typography className={classes.title}>{props.title}</Typography>
            {props.icons}
            <Typography className={classes.text}>
              {props.description}
            </Typography>
            <CardMedia
              className={classes.image}
              component="img"
              image={props.image}
              title={props.imageTitle}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box className={classes.buttonDiv}>
            {props.link1 !== "" ? (
              <Button
                className={classes.button}
                onClick={() => window.open(props.link1)}
              >
                {props.buttonText1}
              </Button>
            ) : null}
            <Button
              className={classes.button}
              onClick={() => window.open(props.link2)}
            >
              {props.buttonText2}
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Project;
