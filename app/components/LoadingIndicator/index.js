import React from 'react';
import Spin from 'antd/lib/spin';
import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper>
    <Spin />
  </Wrapper>
);

export default LoadingIndicator;
