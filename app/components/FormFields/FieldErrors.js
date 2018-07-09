import React from 'react';
import Proptypes from 'prop-types';

const Component = ({ name, errors, touched }) =>
  errors[name] && touched[name] ? (
    <div className="field-errors">{errors[name]}</div>
  ) : (
    <div />
  );

Component.propTypes = {
  name: Proptypes.string.isRequired,
  errors: Proptypes.object.isRequired,
  touched: Proptypes.object.isRequired,
};

export default Component;
