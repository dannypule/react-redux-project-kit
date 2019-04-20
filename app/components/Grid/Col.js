import React from 'react';
import { node, number } from 'prop-types';
import classnames from 'classnames';

export const Col = ({ children, col, xs, sm, md, lg }) => {
  const classNames = classnames({
    col: !xs && !sm && !md && !lg,
    [`col-${col}_lg-${lg}_md-${md}_sm-${sm}_xs-${xs}`]: col
  });

  return <div className={classNames}>{children}</div>;
};

Col.propTypes = {
  children: node.isRequired,
  col: number,
  xs: number,
  sm: number,
  md: number,
  lg: number
};

Col.defaultProps = {
  col: 12,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12
};
