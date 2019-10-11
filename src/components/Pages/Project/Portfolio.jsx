import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FaLeaf, FaRobot, FaCity, FaQuestion, FaGithubSquare  } from "react-icons/fa";
import { Container } from '@material-ui/core';


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
  title: {
    fontFamily: 'Titillium Web',
    fontSize: "20px",
    color: "white",
    textAlign: 'center',
  },
  summary: {
    fontFamily: 'Titillium Web',
    fontSize: "12px",
    color: "white",
    textAlign: 'center',
  },
  icon: {
    fontSize: "15px",
    color: "white",
    size: "8px",
    textAlign: "center"
  }
});

 function Portfolio() {
  const classes = useStyles();

return (
  <div>
    <Typography variant="h5" component="h2" className={classes.header}>
      PROJECTS
    </Typography>
      
    <Card className={classes.card}>
      <CardContent>
        <Typography  className={classes.title}>
          GreenLeaves
        </Typography>
        <Typography className={classes.summary}>
        A business-to-business (B2B) full-stack web application enabling customers to place orders for pickup or delivery for a client in Seattle. 
        Agile/Scrum Methodology in team of 5. 
        </Typography>
      <Container className={classes.icon}>
        <a href="https://greenleaves-deployed.herokuapp.com/"><FaLeaf className={classes.icon}/></a> {' '}
        <a href="https://github.com/zenglenn42/glpub"><FaGithubSquare className={classes.icon}/></a>
      </Container>
        <br />
        <Typography  className={classes.title}>
            City Rank
        </Typography>
        <Typography className={classes.summary}>
        Ranking livable cities based upon user preferences of 3 dimension (civic happiness, political affiliation, cost of living).  
        Agile/Scrum Methodology in team of 4. 
        </Typography>
        <Container className={classes.icon}>
        <a href="https://team-jjtg.github.io/CityRank/"><FaCity className={classes.icon}/></a> {' '}
        <a href="https://github.com/team-jjtg/CityRank"><FaGithubSquare className={classes.icon}/></a>
      </Container>
        <br />
        <Typography  className={classes.title}>
            Terminal Force
        </Typography>
        <Typography className={classes.summary}>
        A network fighting game where player controls the gravity of objects to fight their opponents. 
        Team of 7 with Agile/Scrum Methodology. UI/UX design of application for mobility, character designs and aesthetic visuals.
        </Typography>
        <Container className={classes.icon}>
        <a href="https://github.com/sligtly-used-but-mostly-confused/projectVFighter"><FaRobot className={classes.icon}/></a> {' '}
        <a href="https://github.com/sligtly-used-but-mostly-confused/projectVFighter"><FaGithubSquare className={classes.icon}/></a>
      </Container>
      </CardContent>
    </Card>
    </div>
  );
}

export default Portfolio;