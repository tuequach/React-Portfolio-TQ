import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import "./Home/style.css";
import Button from '@material-ui/core/Button';
import { FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa";
import List from '@material-ui/core/List';


const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent"
  },
  info: {
    flexGrow: .15,
    color: "white"
  },
  icon: {
    fontSize: "20px",
    color: "white",
    size: "10px"
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
      align="center"
    >
    
    <List className={classes.info}>
          <a href="https://www.linkedin.com/in/tuequach/">
            <Button color="inherit"><FaLinkedin className={classes.icon} /></Button>
          </a>

          <a href="https://github.com/tuequach">
            <Button color="inherit"><FaGithub className={classes.icon} /></Button>
          </a>

          <a href="mailto:tuequachm@gmail.com">
            <Button color="inherit"><FaEnvelope className={classes.icon} /></Button>
          </a>
          </List>

    </BottomNavigation>
  );
}
