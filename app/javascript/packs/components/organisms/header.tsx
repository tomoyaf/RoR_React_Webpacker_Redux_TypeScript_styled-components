import * as React from 'react';
import * as ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: red;
`;
const Icon = styled.img`
  border: 1px solid blue;
`;

document.addEventListener('DOMContentLoaded', () => {
  const user = {
    img_url: '',
  };
  ReactDOM.render(
    <Wrapper>
      <Icon src="{user.img_url}" />
    </Wrapper>,
    document.body.appendChild(document.createElement('div')),
  );
});

export default ({ user }) => (
  <Wrapper>
    <Icon src="{user.img_url}" />
  </Wrapper>
);
