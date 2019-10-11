import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "center",
    minWidth: 300,
    backgroundColor: "transparent",
  },
  header: {
    fontSize: "30px",
    color:"white",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto Slab"
  },
  summary: {
    fontFamily: 'Titillium Web',
    fontSize: "18px",
    color: "white",
    textAlign: 'center',

  }
});

 function Info() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.header}>
          ABOUT ME
        </Typography>
        <br />
        <Typography variant="body2" component="p" className={classes.summary}>
        Aspiring Software Engineer with a background in Full Stack Web Development and Game Design. 
        Effective at combining creativity and problem solving to develop user-friendly applications and innovative ideas to the field of technology.
        Experience with working in Unix/Linux environments, Data Structures and Algorithms, Agile/Scrum Methodology, and demonstrating software web technology and mobile application.
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default Info;