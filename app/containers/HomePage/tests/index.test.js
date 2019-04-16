import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import Home from '../../../components/Home/Home';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<Home />)).toEqual(true);
  });
});
