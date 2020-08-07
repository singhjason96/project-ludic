import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {PeoplePage} from './PeopleData';
import People from './People'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    titleStyle: {
      color: 'white',
      paddingTop: '128px'
    },
    gridContainStyle: {
      height: '100vh'
    }
    
  })
);

export default function SectionOne() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid Container className={classes.gridContainStyle}>
        <Grid item xs={6}>
          <Typography variant="h3" className={classes.titleStyle}>Something with the word create</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}