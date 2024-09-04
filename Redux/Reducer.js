import types from './Constants';

const initialState = {
  name: '',
};

const ReducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case types.NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default ReducerFunction;
