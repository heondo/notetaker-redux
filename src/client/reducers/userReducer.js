import update from 'immutability-helper';

export const userReducer = (state = {
  userName: 'heondo',
  userAge: 23
}, action) => {
  switch (action.type) {
    case 'SET_AGE':
      return update(state, {
        userAge: { $set: action.value }
      });
    case 'SET_NAME':
      return update(state, {
        userName: { $set: action.value }
      });
    default:
      return state;
  }
};
