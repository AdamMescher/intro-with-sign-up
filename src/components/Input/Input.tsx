import * as React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

interface InputProps {
  errors?: any;
  label: string;
  placeholder: string;
  name: string;
  register?: any;
  type?: React.HTMLInputTypeAttribute;
  validationOptions?: any;
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
  console.log({ inputPassedErrors: errors });
  return (
    <Wrapper>
      <VisuallyHidden>
        <label htmlFor={name}>{label}</label>
      </VisuallyHidden>
      <input
        aria-invalid={errors?.[name] ? 'true' : 'false'}
        type={type ? type : null}
        name={name}
        placeholder={placeholder}
        {...(register(name), validationOptions)}
      />
      {errors && errors?.name ? <p>there are errors</p> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input {
    background: transparent;
    border: 2px solid;
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
  }
`;

export default Input;
