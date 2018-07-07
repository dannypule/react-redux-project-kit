import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { increaseNumber, decreaseNumber } from '../../store/number/actions';

export class LocaleToggle extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>{this.props.number}</div>
        <Button onClick={this.props.increaseNumber}>+</Button>
        <Button onClick={this.props.decreaseNumber}>-</Button>
      </div>
    );
  }
}

LocaleToggle.propTypes = {
  increaseNumber: PropTypes.func,
  decreaseNumber: PropTypes.func,
  number: PropTypes.number,
};

export default connect(
  state => ({ number: state.get('num').number }),
  {
    increaseNumber,
    decreaseNumber,
  },
)(LocaleToggle);
