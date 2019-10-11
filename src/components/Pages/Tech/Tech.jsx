import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DiJavascript1, DiHtml5, DiPython, DiCss3, DiReact, 
  DiNodejsSmall, DiBootstrap, DiNpm, DiMysql,  DiMongodb,
  DiJqueryLogo, DiGit, DiHeroku, DiPhotoshop,
  DiIllustrator, DiVisualstudio, DiGithubBadge } from "react-icons/di";

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
  icon: {
    fontSize: "25px",
    color: "white",
    textAlign: 'center',
    display: "flex",
    justifyContent: "center"
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
          TECHNOLOGY STACK
        </Typography>
        <br />
        <Typography variant="body2" component="p" className={classes.icon}>
          <DiJavascript1 /> <DiPython /> <DiHtml5 /><DiCss3/>
          <DiReact/> <DiNodejsSmall/> <DiBootstrap/> <DiNpm/>
          <DiMysql/> <DiMongodb/> <DiJqueryLogo/> <DiGit/> <DiGithubBadge/>
          <DiHeroku/> <DiPhotoshop/> <DiIllustrator/> <DiVisualstudio/>
        </Typography>
        <Typography className={classes.summary}>
            <p>MERN Stack</p>
            <p>Mobile Responsive Design</p>
            <p>Cross Browser Testing & Debugging</p>
            <p>Cross Functional Teams</p>
            <p>Agile and Scrum Development</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

export default Info;