import React from 'react';
import { Formik } from 'formik';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
// import yup from 'yup';
import { toast } from 'react-toastify';
import Input from '../FormFields/Input';
import Button from '../FormFields/Button';
import { register } from '../../store/auth/actions';

class RegistrationForm extends React.Component {
  static propTypes = {
    register: Proptypes.func,
  };

  initialValues = {
    firstName: 'bob',
    lastName: 'bobby',
    email: 'boby@gmail.com',
    password: 'admin1',
  };

  onSubmit = (values, actions) => {
    const { firstName, lastName, email, password } = values;
    const { register } = this.props;
    register({ firstName, lastName, email, password, actions, toast });
  };

  // validationSchema = yup.object().shape({
  //   firstName: yup.string().required('A first name is required.'),
  //   lastName: yup.string().required('A last name is required.'),
  //   email: yup
  //     .string()
  //     .email('A valid email is required.')
  //     .required('An email is required.'),
  //   password: yup.string().required('A password is required.'),
  // });

  renderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <form
      onSubmit={e => {
        e.preventDefault();

        handleSubmit(e);
      }}
    >
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
      <Button
        text="Register"
        type="submit"
        primary
        isSubmitting={isSubmitting}
      />
    </form>
  );

  render() {
    return (
      <div className="RegistrationForm">
        <Card>
          <Card.Content>
            <Card.Header>Register</Card.Header>
            <Card.Description>
              <Formik
                initialValues={this.initialValues}
                onSubmit={this.onSubmit}
                render={this.renderForm}
              />
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default connect(
  null,
  {
    register,
  },
)(RegistrationForm);

// validationSchema={this.validationSchema}
