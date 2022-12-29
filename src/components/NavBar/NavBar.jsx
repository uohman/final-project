import React from 'react';
// import { About } from 'components/About/About';
import { NavBarContainer, Title, AboutButton } from './NavBar.Styles';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Title>StreetSmart</Title>

      <AboutButton type="button">About</AboutButton>
    </NavBarContainer>
  );
}