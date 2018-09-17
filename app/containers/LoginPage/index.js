/*
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import LoginForm from '../../components/Login/LoginForm';

/* eslint-disable react/prefer-stateless-function */
export default class Login extends React.PureComponent {
  render() {
    return <LoginForm />;
  }
}
