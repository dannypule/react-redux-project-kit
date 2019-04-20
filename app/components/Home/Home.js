import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Card from 'antd/lib/card';
import yup from 'yup'; // eslint-disable-line

import { increaseNumber, decreaseNumber } from '../../redux/number/actions';
import { getUsers, addUser } from '../../redux/users/actions';
import { Grid, Col } from '../Grid';

class Home extends React.Component {
  state = {
    firstName: 'duder',
    lastName: 'dudeson',
    email: `${new Date().getTime()}@fake-email.infozzz`,
    password: 'admin',
    userRoleCode: 30,
    companyId: 2
  };

  render() {
    const {
      increaseNumber,
      decreaseNumber,
      number,
      getUsersRequest,
      addUserRequest,
      users
    } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      userRoleCode,
      companyId
    } = this.state;

    return (
      <Fragment>
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

        <Grid>
          <div className="col-6">
            <Card>
              <Grid>
                <Col sm={6} md={12}>
                  <Input
                    addonBefore="First name"
                    value={firstName}
                    onChange={event =>
                      this.setState({ firstName: event.target.value })
                    }
                  />
                </Col>

                <Col sm={6} md={12}>
                  <Input
                    addonBefore="Last name"
                    value={lastName}
                    onChange={event =>
                      this.setState({ lastName: event.target.value })
                    }
                  />
                </Col>
                <Col col={12}>
                  <Input
                    addonBefore="Email"
                    value={email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </Col>
                <Col col={12}>
                  <Input
                    addonBefore="Password"
                    value={password}
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </Col>
                <Col col={12}>
                  <Input
                    addonBefore="User Role Code"
                    value={userRoleCode}
                    onChange={event =>
                      this.setState({ userRoleCode: event.target.value })
                    }
                  />
                </Col>
                <Col col={12}>
                  <Input
                    addonBefore="Company ID"
                    value={companyId}
                    onChange={event =>
                      this.setState({ companyId: event.target.value })
                    }
                  />
                </Col>

                <Col col={12}>
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
              </Grid>
            </Card>
          </div>
          <div className="col-6">
            <Card>
              <div className="row">
                {users.content.map(user => (
                  <div key={user.uuid} className="col">
                    <p>{user.email}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Grid>
      </Fragment>
    );
  }
}

Home.propTypes = {
  increaseNumber: PropTypes.func,
  decreaseNumber: PropTypes.func,
  getUsersRequest: PropTypes.func,
  addUserRequest: PropTypes.func,
  number: PropTypes.number,
  users: PropTypes.object
};

export default connect(
  state => ({
    number: state.get('num').number,
    users: state.get('users').users
  }),
  {
    increaseNumber,
    decreaseNumber,
    getUsersRequest: getUsers.request,
    addUserRequest: addUser.request
  }
)(Home);
