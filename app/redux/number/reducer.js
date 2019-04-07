const numberReducer = (state = { number: 42 }, action) => {
  switch (action.type) {
    case 'INCREASE_NUMBER':
      return { ...state, number: state.number + action.number };
    case 'DECREASE_NUMBER':
      return { ...state, number: state.number - action.number };
    default:
      return state;
  }
};

export default numberReducer;
