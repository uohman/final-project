/* eslint-disable max-len */
import React from 'react';

import logo from 'assets/StreetSmart-logo.svg'
import { OuterWrapper, InnerWrapper, Wrapper, Span, /* Heading, */ Subheading, PrimaryButton } from 'GlobalStyles';
import { TitleImage } from './StartPage.Styles'

export const StartPage = ({ onStepChange }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Wrapper>
          <Span>Welcome to</Span>
          {/* <Heading>StreetSmart</Heading> */}
          <TitleImage className="logo" src={logo} width={600} alt="StreetSmart logotype" />
          <Subheading>Can you figure out where we are headed?<br />Get as many points as you can.</Subheading>
          <PrimaryButton type="button" className="button" onClick={onStepChange}>START</PrimaryButton>

        </Wrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}
