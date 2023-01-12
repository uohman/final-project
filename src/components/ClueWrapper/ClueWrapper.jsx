import React, { useState } from 'react';

import { NavBar } from 'components/NavBar/NavBar';
import { Clues } from 'components/Clues/Clues';
import { Mapillary } from 'components/Mapillary/Mapillary';

import { MapillaryContainer, ButtonContainer, ClueButton, GuessButton } from './ClueWrapper.Styles'

export const ClueWrapper = ({ onStepChange }) => {
  const [isShown, setIsShown] = useState(false); //* Show/hide Clues or Mapillary components
  const [toggleClueButton, setToggleClueButton] = useState(true); //* Show/hide CLUE button

  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleClueButton(!toggleClueButton);
  };

  return (
    <div>
      <NavBar />
      <MapillaryContainer>
        {!isShown && <Mapillary width="auto" height="94vh" imageId="343242160559702" />}
      </MapillaryContainer>
      {isShown && <Clues />}
      <ButtonContainer>
        {toggleClueButton && <ClueButton type="button" onClick={handleClick}>CLUE</ClueButton>}
        <GuessButton type="button" className="button" onClick={onStepChange}>I want to make a guess!</GuessButton>
      </ButtonContainer>
    </div>
  );
}