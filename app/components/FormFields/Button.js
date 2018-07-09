import React from 'react';
import { Button } from 'semantic-ui-react';
import Proptypes from 'prop-types';
import SpinnerForButton from '../common/SpinnerForButton';

const Component = ({
  text,
  disabled,
  type,
  primary,
  secondary,
  isSubmitting,
}) => (
  <Button
    type={type}
    primary={primary || false}
    secondary={secondary || false}
    disabled={disabled || isSubmitting}
  >
    {isSubmitting ? <SpinnerForButton /> : text}
  </Button>
);

Component.propTypes = {
  text: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  isSubmitting: Proptypes.bool,
  disabled: Proptypes.bool,
  primary: Proptypes.bool,
  secondary: Proptypes.bool,
};

export default Component;
