import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
// import "../../style.css";
import Footer from "../../Footer";
import Nav from "../../Nav";
import School from "../Education/School";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    marginTop: "0em",
    backgroundImage: "url(img/about.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  },
  main: {
    paddingTop: theme.spacing(5),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    flex: 1
  },
  mainSmall: {
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    flex: 1
  },
 
}));

function Education() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const containerClass = (matches) ? classes.main : classes.mainSmall;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Nav/>
        <Container component="main" className={containerClass} maxWidth="sm">
           <School />
        </Container>
          <Footer />
      </div>
    );
  }

export default Education;