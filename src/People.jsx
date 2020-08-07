import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import firebase from "./Firebase";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    height: "100%",
  },
  contain: {
    margin: theme.spacing(2),
  },
  indCard: {
    height: "400px",
    opacity: "0.7",
    padding: "24px",
  },
  titleStyle: {
    padding: "32px",
    fontFamily: "Roboto Slab, serif",
    color: "white",
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",
  },
  imgStyle: {
    width: "200px",
  },
  logo: {
    width: '20%'
  }
}));

const People = () => {
  var [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const ref = firebase.database().ref(`person/`);
    ref.on("value", (snapshot) => {
      const dbTestimonials = snapshot.val();
      const testimonialsClean = Object.values(dbTestimonials);
      setData(testimonialsClean);
    });
  }, []);

  return (
    <GradientBackground className={classes.backgroundStyle}>
      <NavBar />
      <Container>
        <Typography variant="h3" align="center" className={classes.titleStyle}>
          Talent
        </Typography>
        <Grid container alignItems="center" justify="center">
          {data.map((el) => {
            return (
              <Grid item xs={3} className={classes.contain}>
                <Card variant="outlined" className={classes.indCard}>
                  <CardContent>
                    <img src={el.personPic} className={classes.imgStyle} />
                    <Typography variant="h5" className={classes.textStyle}>
                      {el.personName}
                    </Typography>
                    <a href={el.personTicToc}>
                      <img src="https://seeklogo.com/images/T/tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png" className={classes.logo} />
                    </a>
                    <a href={el.personIg}>
                      <img src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" className={classes.logo} />
                    </a>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </GradientBackground>
  );
};

export default People;
