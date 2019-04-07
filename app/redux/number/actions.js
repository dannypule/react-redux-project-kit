// export const increaseNumber = () => ({ type: 'INCREASE_NUMBER', number: 1 });

export const increaseNumber = number => dispatch => {
  dispatch({ type: 'INCREASE_NUMBER', number });
};

// export const decreaseNumber = () => ({ type: 'DECREASE_NUMBER', number: 1 });

export const decreaseNumber = number => dispatch => {
  dispatch({ type: 'DECREASE_NUMBER', number });
};
