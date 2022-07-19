import * as React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import SignUpForm from '../SignUpForm';
import backgroundMobile from '../../assets/bg-intro-mobile.png'; /////
import backgroundDesktop from '../../assets/bg-intro-desktop.png'; /////

function App() {
  return (
    <Wrapper data-testid='app'>
      <Section>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </Section>
      <Section>
        <Banner>
          <p>
            <Bold>Try it free 7 days</Bold> {` then $20/mo. thereafter`}
          </p>
        </Banner>
        <SignUpForm />
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
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
`;
const Bold = styled.span`
  font-weight: var(--font-weight-bold);
`;

const Section = styled.section`
  width: 100%;
  border: 2px solid magenta;
`;

export default App;
