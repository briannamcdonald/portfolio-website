import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    useMediaQuery,
    makeStyles,
} from "@material-ui/core";
import theme from "../theme/theme";
import * as styles from "../theme/commonStyles";

const SkillBox = (props) => {
    const mobileSize = useMediaQuery(theme.breakpoints.only("xs"));
    const useStyles = makeStyles({
        columnDiv: {
            ...styles.columnDiv,
        },
        card: {
            margin: mobileSize ? "0.5rem" : "0.75rem",
        },
        cardContent: {
            backgroundColor: "#eeeeee",
            padding: "0.8rem",
            width: mobileSize ? "6.5rem" : "8rem",
            "&:last-child": {
                paddingBottom: "0.25rem",
            },
        },
        icon: {
            fontSize: mobileSize ? "1rem" : "2rem",
            width: mobileSize ? "2rem" : "3rem",
            height: mobileSize ? "2rem" : "3rem",
            marginBottom: "0.5rem",
        },
        title: {
            fontSize: mobileSize ? "0.9rem" : "1.2rem",
            fontWeight: "bold",
        },
    });
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent
                className={`${classes.columnDiv} ${classes.cardContent}`}
            >
                <CardMedia
                    className={classes.icon}
                    component="img"
                    src={props.link}
                    image={props.image}
                />
                <Typography className={classes.title}>{props.title}</Typography>
            </CardContent>
        </Card>
    );
};

export default SkillBox;
