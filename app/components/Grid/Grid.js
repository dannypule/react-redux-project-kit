import React from 'react';
import { node } from 'prop-types';

export const Grid = ({ children }) => <div className="grid">{children}</div>;

Grid.propTypes = {
  children: node.isRequired
};
