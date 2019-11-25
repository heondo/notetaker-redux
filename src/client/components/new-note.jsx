import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Box,
  makeStyles,
  useTheme,
  FormGroup,
  Typography,
  TextField
} from '@material-ui/core';
import { addNote } from '../actions/noteActions';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '275px'
    },
    marginTop: '65px',
    padding: '.5rem'
  },
  textField: {
    margin: '.5rem 0'
  }
}));

function NewNote(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [noteTags, setNoteTags] = useState([]);

  return (
    <Box className={classes.container}>
      <Typography className={classes.textField}>
        Create New Note
      </Typography>
      <FormGroup>
        <TextField
          className={classes.textField}
          value={noteTitle}
          label="Title" variant="outlined"
          onChange={e => setNoteTitle(e.target.value)}
        />
        <TextField
          className={classes.textField}
          multiline
          rows={20}
          value={noteBody}
          label="Markdown" variant="outlined"
          onChange={e => setNoteBody(e.target.value)}
        />
      </FormGroup>
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
