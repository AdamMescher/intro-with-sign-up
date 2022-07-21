import * as React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

interface InputProps {
  errors?: any;
  label: string;
  placeholder: string;
  name: string;
  register?: any;
  validationOptions?: any;
  type?: any;
}

const Input = ({
  errors,
  label,
  placeholder,
  name,
  register,
  type,
  validationOptions,
}: InputProps) => {
  console.log({ withinInputErrors: errors });
  return (
    <Wrapper>
      <VisuallyHidden>
        <label htmlFor={name}>{label}</label>
      </VisuallyHidden>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, validationOptions)}
      />
      {errors && <ErrorIcon></ErrorIcon>}
      {errors && <ErrorMessage>{errors?.message}</ErrorMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  background: transparent;
  border: 2px solid;
  border-color: var(--color-neutral-grayish-blue);
  border-radius: 8px;
  padding: 20px;
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
    outline: none;
    box-shadow: 0 0 0 5px var(--box-shadow-color-accent-blue);
  }
`;
const ErrorIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const ErrorMessage = styled.p`
  margin-top: 4px;
  text-align: right;
  font-style: italic;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary-red);
`;

export default Input;
