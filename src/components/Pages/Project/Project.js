import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
// import "../../style.css";
import Footer from "../../Footer";
import Nav from "../../Nav";
import Portfolio from "../Project/Portfolio";

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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    flex: 1
  },
  mainSmall: {
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    flex: 1
  },
  name: {
      color: "white",
      align: "center",
      fontSize: "35px",
  },
  header: {
      color: "white",
      transition: "0.5s",
      opacity: "1" ,
      align: "center",
      fontSize: "30px"
  }
}));

function Project() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const containerClass = (matches) ? classes.main : classes.mainSmall;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Nav/>
        <Container component="main" className={containerClass} maxWidth="sm">
           <Portfolio />
        </Container>
          <Footer />
      </div>
    );
  }

export default Project;