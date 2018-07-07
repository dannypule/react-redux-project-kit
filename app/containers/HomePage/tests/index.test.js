import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import Foo from '../../../components/Foo/Foo';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<Foo />)).toEqual(true);
  });
});
