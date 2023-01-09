import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Mapillary } from 'components/Mapillary/Mapillary';
import { ClueExplanation } from 'components/ClueExplanation/ClueExplanation';

import { NavBar } from 'components/NavBar/NavBar';
// import { Subheading } from 'GlobalStyles';
import { MapillaryContainer, SummaryContainer, SummaryText, ButtonContainer, RestartButton } from './Summary.Styles'

export const Summary = () => {
  const [isShown, setIsShown] = useState(false); // Show ClueExplanation component

  const answer = useSelector((store) => store.game.correctAnswer)
  // const userAnswer = useSelector((store) => store.game.userAnswer)
  const score = useSelector((store) => store.game.score)

  // const correctAnswer = useSelector((store) => store.game.userAnswer) === answer
  // const wrongAnswer = useSelector((store) => store.game.userAnswer) !== answer

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const onRestartButton = () => {
    window.location.reload();
  }

  return (
    <div>
      <NavBar />
      <MapillaryContainer>
        <Mapillary width="auto" height="94vh" imageId="625621858834998" />
      </MapillaryContainer>
      <SummaryContainer>
        {/* {correctAnswer && (
          <SummaryText>That is right! We are headed to {answer}.</SummaryText>
        )}
        {wrongAnswer && (
          <SummaryText>Sorry, that is wrong. We are headed to {answer}.</SummaryText>
        )} */}
        <SummaryText>We are headed to {answer}.</SummaryText>
        <SummaryText>Your score: {score}</SummaryText>
      </SummaryContainer>
      {isShown && <ClueExplanation />}
      <ButtonContainer>
        <RestartButton type="button" onClick={onRestartButton}>RESTART</RestartButton>
        <RestartButton type="button" onClick={handleClick}>Explain clues</RestartButton>
      </ButtonContainer>

    </div>
  );
}