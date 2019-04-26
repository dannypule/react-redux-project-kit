import React from 'react';
import Button from 'antd/lib/button';
import Proptypes from 'prop-types';
import SpinnerForButton from '../common/SpinnerForButton';

const Component = ({ children, isSubmitting, disabled, ...props }) => (
  <Button disabled={disabled || isSubmitting} {...props}>
    {isSubmitting ? <SpinnerForButton /> : children}
  </Button>
);

Component.propTypes = {
  children: Proptypes.node.isRequired,
  isSubmitting: Proptypes.bool,
  disabled: Proptypes.bool
};

export default Component;
