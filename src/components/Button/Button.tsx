import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Base = styled.button`
  padding: 20px;
  border-radius: 8px;
  border: none;
  border-bottom: 3px solid green;
  background: var(--color-primary-green);
  color: var(--color-neutral-white);
  transition: filter 0.2s ease-in-out, opacity 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: opacity(0.8);
  }
  &:active {
    transform: translateY(1px);
    filter: brightness(0.9) opacity(0.8);
  }
  &:focus-visible {
    outline: 2px solid var(--color-primary-green);
    outline-offset: 3px;
  }
`;

const Button = ({ children, ...args }: Props) => {
  return <Base>{children}</Base>;
};

export default Button;
