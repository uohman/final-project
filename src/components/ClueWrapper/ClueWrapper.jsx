import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';

// import { game } from 'reducers/game';

import { NavBar } from 'components/NavBar/NavBar';
import { Clues } from 'components/Clues/Clues';
import { Mapillary } from 'components/Mapillary/Mapillary';

import { MapillaryContainer, ButtonContainer, ClueButton, GuessButton } from './ClueWrapper.Styles'

export const ClueWrapper = ({ onStepChange }) => {
  const [isShown, setIsShown] = useState(false); // Show SingleClue component
  const [toggleClueButton, setToggleClueButton] = useState(true); // Show/hide CLUE button

  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleClueButton(!toggleClueButton);
  };

  /*   const currentScore = useSelector((store) => store.game.score);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleClueButton(!toggleClueButton);
    dispatch(game.actions.setScore(currentScore - 1));
  }; */

  return (
    <div>
      <NavBar />
      <MapillaryContainer>
        <Mapillary width="auto" height="94vh" imageId="498763468214164" />
      </MapillaryContainer>
      {isShown && <Clues />}
      <ButtonContainer>
        {toggleClueButton && <ClueButton type="button" onClick={handleClick}>CLUE</ClueButton>}
        <GuessButton type="button" className="button" onClick={onStepChange}>I want to make a guess!</GuessButton>
      </ButtonContainer>
    </div>
  );
}