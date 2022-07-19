import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  background: var(--color-accent-blue);
  text-align: center;
  color: var(--color-neutral-white);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  box-shadow: var(--box-shadow-one);
  margin-bottom: var(--box-shadow-offset-one-y);
`;

const Banner = ({ children, ...args }: Props) => {
  return <Wrapper {...args}>{children}</Wrapper>;
};

export default Banner;
