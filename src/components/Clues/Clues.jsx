import React, { useState } from 'react';
// import { Link } from 'react-router-dom'

import { NavBar } from 'components/NavBar/NavBar';
import { SingleClue } from 'components/SingleClue/SingleClue';
import { Mapillary } from 'components/Mapillary/Mapillary';

import { MapillaryContainer, ButtonContainer, ClueButton, GuessButton } from './Clues.Styles'

export const Clues = ({ onStepChange }) => {
  const [isShown, setIsShown] = useState(false); // Show SingleClue component
  const [toggleClueButton, setToggleClueButton] = useState(true); // Show/hide CLUE button

  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleClueButton(!toggleClueButton);
  };

  return (
    <div>
      <NavBar />
      <MapillaryContainer>
        <Mapillary width="auto" height="94vh" imageId="498763468214164" />
      </MapillaryContainer>
      {isShown && <SingleClue />}
      <ButtonContainer>
        {toggleClueButton && <ClueButton type="button" onClick={handleClick}>CLUE</ClueButton>}
        <GuessButton type="button" className="button" onClick={onStepChange}>I want to make a guess!</GuessButton>
      </ButtonContainer>
    </div>
  );
}