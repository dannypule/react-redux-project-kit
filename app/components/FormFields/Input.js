import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import Input from 'antd/lib/input';

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
  values
}) => {
  console.log(type);

  return (
    <div className="field">
      <label htmlFor={name}> {/* eslint-disable-line */}
        <span
          className={classNames('label', {
            error: errors[name] && touched[name]
          })}
        >
          {label}
        </span>
        <Input
          className={errors[name] && touched[name] && 'error'}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={values[name]}
        />
      </label>
      <FieldErrors errors={errors} touched={touched} name={name} />
    </div>
  );
};

Component.propTypes = {
  name: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  placeholder: Proptypes.string,
  type: Proptypes.string.isRequired,
  values: Proptypes.object.isRequired,
  errors: Proptypes.object.isRequired,
  touched: Proptypes.object.isRequired,
  onChange: Proptypes.func,
  onBlur: Proptypes.func
};

Component.defaultProps = {
  placeholder: '',
  onChange: noop,
  onBlur: noop
};

export default Component;
