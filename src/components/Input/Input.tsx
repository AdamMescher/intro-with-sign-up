import * as React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid var(--grayish-blue);
  border-radius: 4px;
  padding: 20px;
  ::placeholder {
    color: var(--dark-blue);
  }
  &:active {
    color: var(--dark-blue);
  }
`;

const Input = ({ ...args }) => {
  return <StyledInput {...args} />;
};

export default Input;
