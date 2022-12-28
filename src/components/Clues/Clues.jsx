import React, { useState } from 'react';
// import { Link } from 'react-router-dom'

import { SingleClue } from 'components/SingleClue/SingleClue';
import { Mapillary } from 'components/Mapillary/Mapillary';

export const Clues = ({ onStepChange }) => {
  const [isShown, setIsShown] = useState(false); // Show SingleClue component
  const [toggleClueButton, setToggleClueButton] = useState(true); // Show/hide CLUE button

  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleClueButton(!toggleClueButton);
  };

  return (
    <div>
      This is the Clues component
      <Mapillary width="500px" height="300px" imageId="498763468214164" />

      {isShown && <SingleClue />}
      {toggleClueButton && <button type="button" onClick={handleClick}>CLUE</button>}
      <button type="button" className="button" onClick={onStepChange}>I want to make a guess!</button>

    </div>
  );
}