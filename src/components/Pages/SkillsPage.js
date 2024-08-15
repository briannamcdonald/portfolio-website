import React from "react";
import {
  Box,
  Typography,
  Divider,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import sqliteLogo from "./../../images/sqliteLogo.png";

import SkillBox from "../SkillBox";

const NewSkillsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      backgroundColor: "#e8e8e8",
      margin: "0 auto",
      paddingBottom: "2.25rem",
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    rowDivider: {
      width: "85%",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
    divider: {
      ...styles.divider,
    },
    headerText: {
      ...styles.headerText,
    },
    skillsText: {
      marginTop: "2rem",
    },
    listItemText: {
      color: "black",
      fontSize: "1.2rem",
      margin: "0 1rem",
    },
  });
  const classes = useStyles();
  const showMedRows = useMediaQuery(theme.breakpoints.down("md"));
  const showSmallRows = useMediaQuery(theme.breakpoints.down("sm"));

  const python = (
    <SkillBox
      title="PYTHON"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    />
  );
  const javascript = (
    <SkillBox
      title="JAVASCRIPT"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    />
  );
  const cplusplus = (
    <SkillBox
      title="C++"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    />
  );
  const java = (
    <SkillBox
      title="JAVA"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    />
  );
  const unity = (
    <SkillBox
      title="UNITY"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
    />
  );
  const react = (
    <SkillBox
      title="REACT JS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    />
  );
  const node = (
    <SkillBox
      title="NODE JS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    />
  );
  const redux = (
    <SkillBox
      title="REDUX"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    />
  );
  const html = (
    <SkillBox
      title="HTML"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    />
  );
  const css = (
    <SkillBox
      title="CSS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    />
  );
  const git = (
    <SkillBox
      title="GIT"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    />
  );
  const jira = (
    <SkillBox
      title="JIRA"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    />
  );
  const mongodb = (
    <SkillBox
      title="MONGO DB"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    />
  );
  const sqlite = <SkillBox title="SQLITE" image={sqliteLogo} />;
  const figma = (
    <SkillBox
      title="FIGMA"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    />
  );
  const c = (
    <SkillBox
      title="C"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    />
  );
  const cSharp = (
    <SkillBox
      title="C#"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
    />
  );
  const aws = (
    <SkillBox
      title="AWS"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    />
  );
  const bash = (
    <SkillBox
      title="BASH"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
    />
  );
  const jupyter = (
    <SkillBox
      title="JUPYTER"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
    />
  );
  const vscode = (
    <SkillBox
      title="VS CODE"
      link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    />
  );

  const largeRows = (
    <Box className={classes.rowDivider}>
      <Box className={classes.rowDiv}>
        {python}
        {javascript}
        {cplusplus}
        {cSharp}
        {c}
        {java}
        {unity}
      </Box>
      <Box className={classes.rowDiv}>
        {react}
        {node}
        {redux}
        {html}
        {css}
        {aws}
        {bash}
      </Box>
      <Box className={classes.rowDiv}>
        {git}
        {jupyter}
        {jira}
        {mongodb}
        {sqlite}
        {figma}
        {vscode}
      </Box>
    </Box>
  );
  const mediumRows = (
    <Box className={classes.rowDivider}>
      <Box className={classes.rowDiv}>
        {python}
        {javascript}
        {cplusplus}
        {cSharp}
        {c}
      </Box>
      <Box className={classes.rowDiv}>
        {java}
        {unity}
        {aws}
        {bash}
        {jupyter}
      </Box>
      <Box className={classes.rowDiv}>
        {react}
        {node}
        {redux}
        {html}
        {css}
      </Box>
      <Box className={classes.rowDiv}>
        {git}
        {jira}
        {mongodb}
        {sqlite}
        {figma}
      </Box>
    </Box>
  );
  const smallRows = (
    <Box className={classes.rowDivider}>
      <Box className={classes.rowDiv}>
        {python}
        {javascript}
        {java}
      </Box>
      <Box className={classes.rowDiv}>
        {cplusplus}
        {cSharp}
        {c}
      </Box>
      <Box className={classes.rowDiv}>
        {react}
        {node}
        {redux}
      </Box>
      <Box className={classes.rowDiv}>
        {git}
        {aws}
        {unity}
      </Box>
      <Box className={classes.rowDiv}>
        {html}
        {css}
        {figma}
      </Box>
      <Box className={classes.rowDiv}>
        {jupyter}
        {bash}
        {vscode}
      </Box>
      <Box className={classes.rowDiv}>
        {mongodb}
        {sqlite}
        {jira}
      </Box>
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography
        className={`${classes.skillsText} ${classes.headerText}`}
        align="center"
      >
        My Skills & Tools
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      {showSmallRows ? smallRows : showMedRows ? mediumRows : largeRows}
    </Box>
  );
};

export default NewSkillsPage;
