const authReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return { ...state, loggedIn: true };
    case 'LOGGED_OUT':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
