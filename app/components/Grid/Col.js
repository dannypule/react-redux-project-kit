import React from 'react';
import { node, number } from 'prop-types';

export const Col = ({ children, col, xs, sm, md, lg }) => {
  let className = `col-${col}`;
  if (lg) className += `_lg-${lg}`;
  if (md) className += `_md-${md}`;
  if (sm) className += `_sm-${sm}`;
  if (xs) className += `_xs-${xs}`;

  return <div className={className}>{children}</div>;
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
  xs: null,
  sm: null,
  md: null,
  lg: null
};
