import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import TopBar from './TopBar';
import SideMenu from './SideMenu';
import { logout } from '../../store/auth/actions';

// eslint-disable-next-line
class Layout extends Component {
  static propTypes = {
    loggedIn: Proptypes.bool,
    logout: Proptypes.func,
    children: Proptypes.node,
  };

  render() {
    // layout needs to be handled differently when next.js 6 comes out
    const { children, loggedIn, logout } = this.props;
    return (
      <div className="Layout">
        <TopBar loggedIn={loggedIn} logout={logout} />
        <div className="layout-main">
          {/* {loggedIn && <SideMenu />} */}
          <SideMenu />
          <div className="layout-body">{children}</div>
        </div>
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
  },
)(Layout);
