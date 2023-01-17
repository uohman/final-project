/* eslint-disable max-len */
import React from 'react';
import logo from 'assets/StreetSmart-logo.svg'
import 'animate.css';

import { OuterWrapper, InnerWrapper, Wrapper, Span, PrimaryButton } from 'GlobalStyles';
import { TitleImage, StartPageSubheading } from './StartPage.Styles'

export const StartPage = ({ onStepChange }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Wrapper>
          <Span>Welcome to</Span>
          <TitleImage className="logo" src={logo} width={600} alt="StreetSmart logotype" />
          <StartPageSubheading>Can you figure out where we are headed?<br />Get as many points as you can.</StartPageSubheading>
          <PrimaryButton type="button" className="button" onClick={onStepChange}>START</PrimaryButton>
        </Wrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}
