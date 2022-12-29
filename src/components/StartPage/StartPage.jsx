/* eslint-disable max-len */
import React from 'react';

import { Wrapper, Span, Heading, Subheading, PrimaryButton } from 'GlobalStyles';

export const StartPage = ({ onStepChange }) => {
  return (
    <Wrapper>

      <Span>Welcome to</Span>
      <Heading>StreetSmart</Heading>
      <Subheading>Can you figure out where we are headed?</Subheading>
      <PrimaryButton type="button" className="button" onClick={onStepChange}>START</PrimaryButton>

    </Wrapper>
  );
}
