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
import { Link } from "react-router-dom";
import theme from "../theme/theme";

const RoutingProject = (props) => {
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
        <Link
          to={props.route}
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardActionArea>
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
        </Link>
        <CardActions>
          <Box className={classes.buttonDiv}>
            <Link
              to={props.route}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button className={classes.button}>{props.buttonText}</Button>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RoutingProject;
