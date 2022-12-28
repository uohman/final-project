import React, { useState } from 'react';
import { About } from 'components/About/About';
import { NavBarContainer, AboutButton } from './NavBar.Styles';

export const NavBar = () => {
  const [isShown, setIsShown] = useState(false); // Show About component

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <NavBarContainer>
      <h4>StreetSmart</h4>

      {isShown && <About />}
      <AboutButton type="button" onClick={handleClick}>About</AboutButton>
    </NavBarContainer>
  );
}