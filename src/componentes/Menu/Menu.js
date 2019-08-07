import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { Menu } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


function HideOnScroll(props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
 
  window: PropTypes.func,
};

const useStyles = makeStyles({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  });

export default function HideAppBar(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
              <Menu />
            <Typography variant="h6" style={ {margin: "0 auto"} }>To Do List - DH</Typography>
            <Avatar
                className={ classes.avatar}
                alt="Foto avatar"
                src="https://thispersondoesnotexist.com/image"
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
