import React from 'react';
// import { About } from 'components/About/About';
import { NavBarContainer, Title, AboutButton } from './NavBar.Styles';

export const NavBar = () => {
  const onRestartButton = () => {
    window.location.reload();
  }
  return (
    <NavBarContainer>
      <Title type="button" onClick={onRestartButton}>StreetSmart</Title>
      <AboutButton type="button">About</AboutButton>
    </NavBarContainer>
  );
}