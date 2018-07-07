import React from 'react';
import { shallow } from 'enzyme';

import UI from '../index';

describe('<UI />', () => {
  it('should exist', () => {
    const renderedComponent = shallow(<UI />);
    expect(renderedComponent).toBeTruthy();
  });
});
