import React from 'react';
// import { About } from 'components/About/About';
import { NavBarContainer, AboutButton } from './NavBar.Styles';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <h4>StreetSmart</h4>

      <AboutButton type="button">About</AboutButton>
    </NavBarContainer>
  );
}