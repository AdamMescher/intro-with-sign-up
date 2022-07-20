import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setValue('firstName', '');
    setValue('lastName', '');
    setValue('email', '');
    setValue('password', '');
  });

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type='text'
        label='First Name'
        name={'firstName'}
        placeholder='First Name'
        aria-invalid={errors.firstName ? 'true' : 'false'}
        register={register}
        required
      />
      <Input
        type='text'
        label='Last Name'
        name={'lastName'}
        placeholder='Last Name'
        aria-invalid={errors.lastName ? 'true' : 'false'}
        register={register}
        required
      />
      <Input
        type='email'
        label='Email'
        name={'email'}
        placeholder='Email'
        aria-invalid={errors.email ? 'true' : 'false'}
        register={register}
        required
      />
      <Input
        type='password'
        label='Password'
        name={'password'}
        placeholder='Password'
        aria-invalid={errors.password ? 'true' : 'false'}
        register={register}
        required
      />
      <Button>Claim Your Free Trial</Button>
      <Disclaimer>
        By clicking the button, you are agreeing to our{' '}
        <a href='/termsofservice'>Terms of Service</a>
      </Disclaimer>
    </Form>
  );
};

const Form = styled.form`
  background: white;
  box-shadow: var(--box-shadow-one);
  padding: 24px;
  border-radius: 8px;
  margin-bottom: var(--box-shadow-offset-one-y);
  display: flex;
  flex-direction: column;
  gap: 16px;

  button,
  input {
    width: 100%;
  }

  button {
    text-transform: uppercase;
    font-weight: var(--font-weight-semi-bold);
    letter-spacing: 1.1px;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  color: var(--color-neutral-grayish-blue);
  font-weight: var(--font-weight-medium);
  a {
    color: var(--color-primary-red);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default SignUpForm;
