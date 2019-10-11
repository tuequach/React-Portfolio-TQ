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

 function School() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.card}>
      <CardContent>
    
        <Typography variant="h5" component="h2" className={classes.header}>
          EDUCATION
        </Typography>
       <br />
        <Typography variant="body2" component="p" className={classes.summary}>
            University of Texas at Austin: Postgrad Technical Degree in Full Stack Web and Application Development.
          <br />
          <br />
            Texas A&M University : Bachelor of Science in Sociology with minor in Game Design and Development.
        </Typography>

      </CardContent>
    </Card>
    </div>
  );
}

export default School;