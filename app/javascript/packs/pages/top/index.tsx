import * as React from 'react';
import * as ReactDOM from 'react-dom';
import propTypes from 'prop-types';

interface HelloProps {
  name: string;
}

const Hello: React.SFC<HelloProps> = props => (
  <div>Hello {props.name}!</div>
);

Hello.defaultProps = {
  name: 'David',
};

Hello.propTypes = {
  name: propTypes.string,
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React with Redux, TypeScript and styled-components" />,
    document.body.appendChild(document.createElement('div')),
  );
});
