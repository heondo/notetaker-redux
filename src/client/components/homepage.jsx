import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Box,
  makeStyles,
  useTheme } from '@material-ui/core';

import { addNote } from '../actions/noteActions';

function HomePage(props) {
  return (
    <Container>
      <Box my={10}>
        Main content here?
      </Box>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    notes: state.noteReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: note => {
      dispatch(addNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
