import axios from 'axios';

export const getScatterData = () => dispatch =>
  axios
    .get('/api/data')
    .then(res => {
      dispatch({ type: 'UPDATE_SCATTER_DATA', scatterData: res.data });
    })
    .catch(err => {
      console.log(err);
    });
