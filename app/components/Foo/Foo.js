import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { increaseNumber, decreaseNumber } from '../../store/number/actions';

const LocaleToggle = ({ increaseNumber, decreaseNumber, number }) => (
  <div>
    <div>{number}</div>
    <Button onClick={() => increaseNumber(2)}>+</Button>
    <Button onClick={() => decreaseNumber(2)}>-</Button>
  </div>
);

LocaleToggle.propTypes = {
  increaseNumber: PropTypes.func,
  decreaseNumber: PropTypes.func,
  number: PropTypes.number,
};

export default connect(
  state => ({ number: state.get('num').number }),
  {
    increaseNumber,
    decreaseNumber,
  },
)(LocaleToggle);
