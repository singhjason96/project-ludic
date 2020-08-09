import React, { useContext, useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {PeoplePage} from './PeopleData';
import People from './People'
import ReactPlayer from "react-player"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    titleStyle: {
      color: 'white',
    },
    gridContainStyle: {
      height: '100vh'
    },
    videoStyle: {
      alignItems: 'center',
      width: '100% !important',
      height: '100% !important'
    },
  })
);

export default function Welcome() {
  const classes = useStyles();
  const video = require('./ludic.mov')

  return (
    <React.Fragment>
        <div>Hi</div>
    </React.Fragment>
  );
}