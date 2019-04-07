import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import yup from 'yup'; // eslint-disable-line

import { increaseNumber, decreaseNumber } from '../../redux/number/actions';
import { getUsers, addUser } from '../../redux/users/actions';

const LocaleToggle = ({
  increaseNumber,
  decreaseNumber,
  number,
  getUsers,
  addUser,
}) => (
  <div>
    <div>
      <div>{number}</div>
      <Button onClick={() => increaseNumber(2)}>+</Button>
      <Button onClick={() => decreaseNumber(2)}>-</Button>
    </div>
    <br />
    <Button primary onClick={() => getUsers()}>
      Get Users
    </Button>
    <Button primary onClick={() => addUser()}>
      Add User
    </Button>
  </div>
);

LocaleToggle.propTypes = {
  increaseNumber: PropTypes.func,
  decreaseNumber: PropTypes.func,
  getUsers: PropTypes.func,
  addUser: PropTypes.func,
  number: PropTypes.number,
};

export default connect(
  state => ({ number: state.get('num').number }),
  {
    increaseNumber,
    decreaseNumber,
    getUsers,
    addUser,
  },
)(LocaleToggle);
