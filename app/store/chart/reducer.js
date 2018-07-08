const chartReducer = (state = { scatterData: [] }, action) => {
  switch (action.type) {
    case 'UPDATE_SCATTER_DATA':
      return { ...state, scatterData: action.scatterData };
    default:
      return state;
  }
};

export default chartReducer;
