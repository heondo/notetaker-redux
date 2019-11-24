import update from 'immutability-helper';

export const mathReducer = (state = {
  value: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case 'ADD':
      return update(state, {
        value: { $set: state.value + action.value },
        lastValues: { $push: [action.value] }
      });
    case 'SUBTRACT':
    default:
      return state;
  }
};
