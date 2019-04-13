import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Card from 'antd/lib/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import yup from 'yup'; // eslint-disable-line

import { increaseNumber, decreaseNumber } from '../../redux/number/actions';
import { getUsers, addUser } from '../../redux/users/actions';

class Home extends React.Component {
  state = {
    firstName: 'duder',
    lastName: 'dudeson',
    email: `${new Date().getTime()}@fake-email.infozzz`,
    password: 'admin',
    userRoleCode: 30,
    companyId: 2,
  };

  render() {
    const {
      increaseNumber,
      decreaseNumber,
      number,
      getUsersRequest,
      addUserRequest,
      users,
    } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      userRoleCode,
      companyId,
    } = this.state;

    return (
      <div>
        <div>
          <div>{number}</div>
          <Button.Group>
            <Button type="primary" onClick={() => increaseNumber(2)}>
              +
            </Button>
            <Button type="primary" onClick={() => decreaseNumber(2)}>
              -
            </Button>
          </Button.Group>
        </div>
        <br />
        <Row gutter={10}>
          <Col span={12}>
            <Card>
              <Row>
                <Col span={24}>
                  <Input
                    addonBefore="First name"
                    value={firstName}
                    onChange={event =>
                      this.setState({ firstName: event.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input
                    addonBefore="Last name"
                    value={lastName}
                    onChange={event =>
                      this.setState({ lastName: event.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input
                    addonBefore="Email"
                    value={email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input
                    addonBefore="Password"
                    value={password}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input
                    addonBefore="User Role Code"
                    value={userRoleCode}
                    onChange={event =>
                      this.setState({ userRoleCode: event.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input
                    addonBefore="Company ID"
                    value={companyId}
                    onChange={event =>
                      this.setState({ companyId: event.target.value })
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <Button.Group>
                    <Button type="primary" onClick={() => getUsersRequest(42)}>
                      Get Users
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => addUserRequest(this.state)}
                    >
                      Add User
                    </Button>
                  </Button.Group>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Row>
                {users.content.map(user => (
                  <Col key={user.uuid} span={24}>
                    <p>{user.email}</p>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Home.propTypes = {
  increaseNumber: PropTypes.func,
  decreaseNumber: PropTypes.func,
  getUsersRequest: PropTypes.func,
  addUserRequest: PropTypes.func,
  number: PropTypes.number,
  users: PropTypes.object,
};

export default connect(
  state => ({
    number: state.get('num').number,
    users: state.get('users').users,
  }),
  {
    increaseNumber,
    decreaseNumber,
    getUsersRequest: getUsers.request,
    addUserRequest: addUser.request,
  },
)(Home);
