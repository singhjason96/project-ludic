import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  MenuItem,
  FormHelperText,
  Select,
  Typography
} from "@material-ui/core";
import firebase from "./Firebase";

const useStyles = makeStyles((theme) => ({
  formStyle: {
    width: "50%",
    marginRight: "auto",
    marginLeft: "auto",
  },
}));

export const PeoplePage = () => {
  var [name, setName] = useState("");
  var [ig, setIg] = useState('');
  var [pic, setPic] = useState("");
  var [ticToc, setTicToc] = useState('')
  const classes = useStyles();

  const OnChangeName = (e) => {
    setName(e.target.value);
  };
  const OnChangeIg = (e) => {
    setIg(e.target.value);
  };
  const OnChangeTicToc = (e) => {
    setTicToc(e.target.value);
  };
  const OnPicChange = (e) => {
    setPic(e.target.value);
  };


  const onSubmit = () => {
    firebase.database().ref(`person/${new Date().getTime()}`).set({
      personName: name,
      personIg: ig,
      personPic: pic,
      personTicToc: ticToc,
    });
  };


  return (
    <>
    <Typography align="center" variant="h3">Add Item</Typography>
      <form className={classes.formStyle}>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Name of Creator</InputLabel>
          <Input id="name" name="name" value={name} onChange={OnChangeName} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Instagram</InputLabel>
          <Input
            id="price"
            name="price"
            value={ig}
            onChange={OnChangeIg}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="pic">Link Address of Pic</InputLabel>
          <Input id="pic" name="pic" value={pic} onChange={OnPicChange} />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="tic toc">Tic Toc</InputLabel>
          <Input id="tic toc" name="tic toc" value={ticToc} onChange={OnChangeTicToc} />
        </FormControl>
        <Button onClick={onSubmit}>Submit</Button>
      </form>
    </>
  );
};