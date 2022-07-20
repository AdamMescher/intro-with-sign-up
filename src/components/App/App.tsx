import * as React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import SignUpForm from '../SignUpForm';
import Title from '../Title';
import backgroundMobile from '../../assets/bg-intro-mobile.png'; /////
import backgroundDesktop from '../../assets/bg-intro-desktop.png'; /////

function App() {
  return (
    <Wrapper data-testid='app'>
      <Copy>
        <Title as={'h1'}>Learn to code by watching others</Title>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </Copy>
      <Form>
        <Banner>
          <p>
            <Bold>Try it free 7 days</Bold> {` then $20/mo. thereafter`}
          </p>
        </Banner>
        <SignUpForm />
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 74px;
  padding-bottom: 74px;
  gap: 24px;
  background-color: var(--color-primary-red);
  background-image: url(${backgroundMobile});
  background-image: -webkit-image-set(
    url(${backgroundMobile}) 1x,
    url(${backgroundDesktop}) 2x
  );
  background-image: image-set(
    url(${backgroundMobile}) 1x,
    url(${backgroundDesktop}) 2x
  );
  h1 {
    font-weight: var(--font-weight-semi-bold);
  }
`;
const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;

const Section = styled.section`
  width: 100%;
  width: clamp(320px, 95%, 1280px);
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
`;

const Copy = styled(Section)`
  color: var(--color-neutral-white);
  text-align: center;
`;

const Form = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default App;
