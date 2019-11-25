import React, { useState } from 'react';
import {
  Container,
  Box,
  makeStyles,
  useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '275px'
    },
    marginTop: '65px',
    padding: '.3rem'
  }
}));

export default function HomePage(props) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      If a note is selected, view the note. If the type of selectedNote is edit then display edit
    </Box>
  );
}
