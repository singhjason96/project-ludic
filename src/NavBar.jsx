import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontFamily: "'Noto Sans', sans-serif",
    },
    header: {
      backgroundColor: "transparent",
      display: 'flex',
    },
    linkStyle: {
      textDecoration: 'none',
      color: 'white'
    },
    menuButton: {
      display: 'flex',
      justifyContent: 'center',
    },
    logoStyle: {
      width: '10%'
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const logo = require('./logo.png');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.menuButton}>
          <Link to="/" className={classes.linkStyle}>
            <Typography variant="h6" className={classes.title}>
              Project Ludic
            </Typography>
          </Link>
          <img src={logo} className={classes.logoStyle}/>

          <Link to="/talent" className={classes.linkStyle}>
            <Typography>Talent</Typography>
          </Link>
        </Toolbar>
      </AppBar> 
    </div>
  );
}

 