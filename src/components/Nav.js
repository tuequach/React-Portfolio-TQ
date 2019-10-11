import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {  MdInfoOutline, MdSchool,MdComputer,  MdCollections} from "react-icons/md";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: .5,
    backgroundColor: "transparent"
  },
 
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
    color: "white"
  },
  info: {
    flexGrow: .01,
    color: "white"
  },
  icon: {
    color: "white",
    size: "10px"
  },
  container: {
    alignItems: "center"
  }
}));


function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <Typography className={classes.title}>
            <a href="home" className={classes.title}>
            Tue Quach
            </a>
          </Typography>


         <List className={classes.info}>
            <a href="about">
              <Button color ="inherit"><MdInfoOutline  className={classes.icon}/></Button>
            </a>
            <a href="education">
              <Button color="inherit"><MdSchool className={classes.icon}/></Button>
            </a>
            <a href="skill">
              <Button color= "inherit"><MdComputer className={classes.icon}/></Button>
            </a>
            <a href="project">
              <Button color="inherit"><MdCollections className={classes.icon}/></Button>
            </a>
          </List>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;