import React, { useState } from 'react';
// import { Link } from 'react-router-dom'

import { SingleClue } from 'components/SingleClue/SingleClue';
import { Mapillary } from 'components/Mapillary/Mapillary';

import { PrimaryButton } from 'GlobalStyles';
import { ButtonContainer, SecondaryButton } from './Clues.Styles'

export const Clues = ({ onStepChange }) => {
  const [isShown, setIsShown] = useState(false); // Show SingleClue component
  const [toggleClueButton, setToggleClueButton] = useState(true); // Show/hide CLUE button

  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleClueButton(!toggleClueButton);
  };

  return (
    <div>
      <Mapillary width="500px" height="300px" imageId="498763468214164" />

      {isShown && <SingleClue />}
      <ButtonContainer>
        {toggleClueButton && <PrimaryButton type="button" onClick={handleClick}>CLUE</PrimaryButton>}
        <SecondaryButton type="button" className="button" onClick={onStepChange}>I want to make a guess!</SecondaryButton>
      </ButtonContainer>
    </div>
  );
}