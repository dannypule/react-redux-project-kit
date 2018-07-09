import React from 'react';
import { shallow } from 'enzyme';

import Login from '../index';

describe('<Login />', () => {
  it('should exist', () => {
    const renderedComponent = shallow(<Login />);
    expect(renderedComponent).toBeTruthy();
  });
});
