import React, { Fragment } from 'react';
import { Formik } from 'formik';
import Card from 'antd/lib/card';
import Typography from 'antd/lib/typography';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { object, string } from 'yup';
import Input from '../FormFields/Input';
import Button from '../FormFields/Button';
import { login } from '../../redux/auth/actions';

const { Title } = Typography;

class LoginForm extends React.Component {
  static propTypes = {
    login: Proptypes.func
  };

  initialValues = {
    email: '',
    password: ''
  };

  onSubmit = (values, formikActions) => {
    const { email, password } = values;
    const { login } = this.props;
    login({ email, password, formikActions });
  };

  validationSchema = object().shape({
    email: string()
      .email('A valid email is required.')
      .required('An email is required.'),
    password: string().required('A password is required.')
  });

  renderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <div className="LoginForm__fields">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          label="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        />
      </div>
      <Button
        className="LoginForm__button"
        htmlType="submit"
        type="primary"
        isSubmitting={isSubmitting}
        block
      >
        Login
      </Button>
    </form>
  );

  render() {
    return (
      <div className="LoginForm">
        <Card className="LoginForm__card" size="small">
          <Fragment>
            <Title className="LoginForm__title" level={4}>
              Login
            </Title>
            <Formik
              initialValues={this.initialValues}
              onSubmit={this.onSubmit}
              render={this.renderForm}
              validationSchema={this.validationSchema}
            />
          </Fragment>
        </Card>
      </div>
    );
  }
}

export default connect(
  null,
  {
    login
  }
)(LoginForm);
