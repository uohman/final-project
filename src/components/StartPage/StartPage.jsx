/* eslint-disable max-len */
import React from 'react';
import logo from 'assets/StreetSmart-logo.svg'
import 'animate.css';

import { OuterWrapper, InnerWrapper, Wrapper, Span } from 'GlobalStyles';
import { TitleImage, StartPageSubheading, StartButton } from './StartPage.Styles'

export const StartPage = ({ onStepChange }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Wrapper>
          <Span tabIndex={0}>Welcome to</Span>
          <TitleImage tabIndex={0} className="logo" src={logo} width={600} alt="StreetSmart logotype" />
          <StartPageSubheading tabIndex={0}>Can you figure out where we are headed?<br />Get as many points as you can.</StartPageSubheading>
          <StartButton type="button" className="button" onClick={onStepChange}>START</StartButton>
        </Wrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}
