import * as React from 'react';
import styled from 'styled-components';

const Form = styled.form``;

const SignUpForm = () => {
  return (
    <Form>
      <div>
        <label htmlFor={'firstName'}>Email</label>
        <input name={'firstName'} placeholder={'First Name'}></input>
      </div>
    </Form>
  );
};

export default SignUpForm;
