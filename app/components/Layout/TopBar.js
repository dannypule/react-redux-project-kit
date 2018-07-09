import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  static propTypes = {
    loggedIn: Proptypes.bool,
    logout: Proptypes.func,
  };

  logout = () => {
    const { logout } = this.props;
    logout();
  };

  renderDefault = () => {
    const links = [
      {
        href: '/login',
        text: 'Login',
      },
      {
        href: '/register',
        text: 'Register',
      },
      {
        href: '/contact',
        text: 'Contact',
      },
      {
        href: '/about',
        text: 'About',
      },
    ];
    return (
      <div className="topbar-default">
        <span className="left-title">Yatta Health Club</span>
        <div className="links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              to={link.href}
              className="link"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  renderLoggedIn = () => (
    <div className="topbar-logged-in">
      <span className="left-title">Yatta Health Club</span>
      <span className="user-dropdown">
        <Image
          src="https://api.adorable.io/avatars/45/abott@adorable.pngCopy"
          avatar
        />
        <Dropdown inline text="Fenton Bentley">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href="/contact" to="/contact">
                <span>Contact</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/about" to="/about">
                <span>About</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/profile" to="/profile">
                <span>Profile</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <button onClick={this.logout}>Logout</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span>
      <div className="burger-menu">
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
