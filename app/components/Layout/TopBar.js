import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import Avatar from 'antd/lib/avatar';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@material-ui/icons';

class TopBar extends Component {
  static propTypes = {
    loggedIn: Proptypes.bool,
    logout: Proptypes.func
  };

  logout = () => {
    const { logout } = this.props;
    logout();
  };

  renderDefault = () => {
    const links = [
      {
        href: '/login',
        text: 'Login'
      },
      {
        href: '/register',
        text: 'Register'
      },
      {
        href: '/contact',
        text: 'Contact'
      },
      {
        href: '/about',
        text: 'About'
      }
    ];
    return (
      <div className="TopBar__default">
        <span className="TopBar__left-title">Yatta Health Club</span>
        <div className="TopBar__left-links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              to={link.href}
              className="TopBar__left-link"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  menu = () => (
    <Menu>
      <Menu.Item>
        <Link href="/profile" to="/profile">
          <span>Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item onClick={this.logout}>Logout</Menu.Item>
    </Menu>
  );

  renderLoggedIn = () => (
    <div>
      <span className="TopBar__left-title">Yatta Health Club</span>
      <span className="TopBar__user-dropdown">
        <Avatar src="https://api.adorable.io/avatars/45/abott@adorable.pngCopy" />
        <Dropdown overlay={this.menu} trigger={['click']}>
          <button type="button" className="ant-dropdown-link" href="#">
            Fenton Bently <ChevronRight />
          </button>
        </Dropdown>
      </span>
      <div className="TopBar__burger-menu">
        <i className="material-icons">menu</i>
      </div>
    </div>
  );

  render() {
    const { loggedIn } = this.props;
    return (
      <header className="TopBar">
        {!loggedIn ? this.renderDefault() : this.renderLoggedIn()}
      </header>
    );
  }
}

export default TopBar;
