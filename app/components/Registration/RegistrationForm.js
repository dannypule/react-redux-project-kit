import React, { Fragment } from 'react';
import { Formik } from 'formik';
import Card from 'antd/lib/card';
import Typography from 'antd/lib/typography';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { object, string } from 'yup';
import Input from '../FormFields/Input';
import Button from '../FormFields/Button';
import { register } from '../../redux/auth/actions';

const { Title } = Typography;

class RegistrationForm extends React.Component {
  static propTypes = {
    register: Proptypes.func
  };

  initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  onSubmit = (values, formikActions) => {
    const { firstName, lastName, email, password } = values;
    const { register } = this.props;
    register({ firstName, lastName, email, password, formikActions });
  };

  validationSchema = object().shape({
    firstName: string().required('A first name is required.'),
    lastName: string().required('A last name is required.'),
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
      <div className="RegistrationForm__fields">
        <Input
          name="firstName"
          type="text"
          placeholder="First Name"
          label="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        />
        <Input
          name="lastName"
          type="text"
          placeholder="Last Name"
          label="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
        />
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
        htmlType="submit"
        type="primary"
        block
        isSubmitting={isSubmitting}
      >
        Register
      </Button>
    </form>
  );

  render() {
    return (
      <div className="RegistrationForm">
        <Card className="RegistrationForm__card" size="small">
          <Fragment>
            <Title className="RegistrationForm__title" level={4}>
              Register
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
    register
  }
)(RegistrationForm);
