import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import { Input } from 'semantic-ui-react';
import FieldErrors from './FieldErrors';

const noop = () => {};

const Component = ({
  name,
  label,
  placeholder,
  errors,
  touched,
  type,
  onChange,
  onBlur,
  values,
}) => (
  <div className="field">
    <label htmlFor={name}>
      <span
        className={classNames('label', {
          error: errors[name] && touched[name],
        })}
      >
        {label}
      </span>
      <Input
        className={errors[name] && touched[name] && 'error'}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange || noop}
        onBlur={onBlur || noop}
        value={values[name]}
      />
    </label>
    <FieldErrors errors={errors} touched={touched} name={name} />
  </div>
);

Component.propTypes = {
  name: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  type: Proptypes.string.isRequired,
  values: Proptypes.object.isRequired,
  errors: Proptypes.object.isRequired,
  touched: Proptypes.object.isRequired,
  onChange: Proptypes.func,
  onBlur: Proptypes.func,
};

export default Component;
