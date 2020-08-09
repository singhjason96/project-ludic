import React, { useContext, useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {PeoplePage} from './PeopleData';
import People from './People'
import ReactPlayer from "react-player"
import Welcome from './FadeWelcome';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    titleStyle: {
      color: 'white',
    },
    gridContainStyle: {
      height: '100%'
    },
    videoStyle: {
      alignItems: 'center',
      width: '100% !important',
      height: '100% !important'
    },
    welcomeStyle: {

    }
  })
);

export default function SectionOne() {
  const classes = useStyles();
  const video = require('./ludic.mov')
  var [showingAlert, setShowingAlert] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
     return  <div>yo</div>
    }, 1000);
    return () => clearTimeout(timer);
  }, []);





  return (
    <React.Fragment>
        <ReactPlayer url={video} controls = {true} className={classes.videoStyle}/>
    </React.Fragment>
  );
}