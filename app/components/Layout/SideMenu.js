import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';

const { SubMenu } = Menu;

class SideMenu extends Component {
  menu = [
    {
      title: 'Members',
      content: [
        {
          title: 'Home',
          url: '/'
        }
      ]
    },
    {
      title: 'Billing',
      content: [
        {
          title: 'Profile',
          url: '/profile'
        }
      ]
    },
    {
      title: 'Settings',
      content: [
        {
          title: 'Create new health club',
          url: '/create-new-health-club'
        },
        {
          title: 'Health club settings',
          url: '/health-club-settings'
        }
      ]
    }
  ];

  render() {
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenu__menu"
          onClick={this.handleClick}
          style={{ width: 220 }}
          defaultSelectedKeys={[]}
          defaultOpenKeys={[]}
          mode="inline"
          forceSubMenuRender
          selectable={false}
        >
          {this.menu.map(subMenuItem => (
            <SubMenu
              key={subMenuItem.title}
              title={<span>{subMenuItem.title}</span>}
            >
              {subMenuItem.content.map(menuItem => (
                <Menu.Item key={menuItem.title}>
                  <Link to={menuItem.url}>
                    <span>{menuItem.title}</span>
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
    );
  }
}

export default SideMenu;
