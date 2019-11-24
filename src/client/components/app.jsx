import React from 'react';
import { connect } from 'react-redux';
import { setName, setAge } from '../actions/userActions';
import { addNumber, subtractNumber } from '../actions/mathActions';

function App(props) {
  return (
    <div>
      <div>
        {props.user.userName}
      </div>
      <div>
        {props.math.value}
        <button onClick={() => {
          props.addValue(1);
        }}>
          increase value
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    },
    setAge: age => {
      dispatch(setAge(age));
    },
    addValue: num => {
      dispatch(addNumber(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
