/* eslint-disable max-len */
import React from 'react';
import logo from 'assets/StreetSmart-logo-without-pin.svg'
import icon from 'assets/Pin-icon-blue.svg'
import 'animate.css';

import { OuterWrapper, InnerWrapper, Wrapper, Span, Subheading, PrimaryButton } from 'GlobalStyles';
import { TitleImage, Icon } from './StartPage.Styles'

export const StartPage = ({ onStepChange }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Wrapper>
          <Icon className="animate__animated animate__bounce" src={icon} width={30} alt="Pin icon" />
          <Span>Welcome to</Span>
          <TitleImage className="logo" src={logo} width={600} alt="StreetSmart logotype" />
          <Subheading>Can you figure out where we are headed?<br />Get as many points as you can.</Subheading>
          <PrimaryButton type="button" className="button" onClick={onStepChange}>START</PrimaryButton>

        </Wrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}
