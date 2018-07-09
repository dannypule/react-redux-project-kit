const authReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, loggedIn: true };
    case 'LOGIN_FAIL':
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
