import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";
import Typography from '@material-ui/core/Typography';
import "typeface-roboto";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  name: {
    color: "white",
    align: "center",
    fontSize: "60px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Playfair Display",
  
  },
  header: {
    color: "white",
    transition: "0.5s",
    opacity: "1" ,
    display: "flex",
    justifyContent:"center",
    fontSize: "30px",
    fontFamily: "Roboto Slab"
},
}));


function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        <h1 className={classes.name}>Tue Quach</h1>
        <h4 className={classes.header}>Full-Stack Javascript Engineer</h4>
      </Typography>
    </div>
  );
}

export default Main;