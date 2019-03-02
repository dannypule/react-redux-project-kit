import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import TopBar from './TopBar';
import SideMenu from './SideMenu';
import { logout, getAuthStatus } from '../../redux/auth/actions';

// eslint-disable-next-line
class Layout extends Component {
  static propTypes = {
    loggedIn: Proptypes.bool,
    logout: Proptypes.func,
    getAuthStatus: Proptypes.func,
    children: Proptypes.node,
  };

  componentWillMount() {
    const { getAuthStatus } = this.props;
    getAuthStatus();
  }

  render() {
    const { children, loggedIn, logout } = this.props;
    return (
      <div className="Layout">
        <TopBar loggedIn={loggedIn} logout={logout} />
        <div className="layout-main">
          {loggedIn && <SideMenu />}
          <div className="layout-body">{children}</div>
        </div>
        <ToastContainer autoClose={3000} hideProgressBar className="toastify" />
      </div>
    );
  }
}

export default connect(
  state => ({
    loggedIn: state.get('auth').loggedIn,
  }),
  {
    logout,
    getAuthStatus,
  },
)(Layout);
