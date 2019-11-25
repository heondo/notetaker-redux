import update from 'immutability-helper';

export const noteReducer = (state = {
  notes: [],
  selectedNote: null
}, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return update(state, {
        notes: { $push: action.value }
      });
    default:
      return state;
  }
};
