import * as React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  register?: any;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
}

const Input = ({
  label,
  placeholder,
  name,
  register,
  required,
  type,
}: InputProps) => (
  <Wrapper>
    <VisuallyHidden>
      <label htmlFor={name}>{label}</label>
    </VisuallyHidden>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, { required })}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  input {
    background: transparent;
    border: 2px solid var(--color-neutral-grayish-blue);
    border-radius: 8px;
    padding: 20px;
    outline-offset: 4px;
    outline-color: var(--color-accent-blue);
    font-weight: var(--font-weight-medium);
    caret-color: var(--color-accent-blue);
    color: var(--color-neutral-dark-blue);
    ::placeholder {
      color: var(--color-neutral-dark-blue);
      font-weight: var(--font-weight-semi-bold);
      font-variant: normal;
    }
    &:focus-visible {
      border-color: var(--color-accent-blue);
    }
  }
`;

export default Input;
