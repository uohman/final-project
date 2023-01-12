import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Mapillary } from 'components/Mapillary/Mapillary';
import { ClueExplanation } from 'components/ClueExplanation/ClueExplanation';
import { NavBar } from 'components/NavBar/NavBar';
import { MapillaryContainer, SummaryContainer, SummaryText, SummaryBigText, ButtonContainer, RestartButton } from './Summary.Styles'

export const Summary = () => {
  const [isShown, setIsShown] = useState(false); //* Show ClueExplanation component

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
  const buttonText = isShown ? 'Close' : 'Explain clues'/* 'Hide clue explanation' : 'Show clue explanation' */;

  return (
    <div>
      <NavBar />
      <MapillaryContainer>
        <Mapillary width="auto" height="94vh" imageId="174038234492468" />
      </MapillaryContainer>
      <SummaryContainer>
        {/* {correctAnswer && (
          <SummaryText>That is right! We are headed to {answer}.</SummaryText>
        )}
        {wrongAnswer && (
          <SummaryText>Sorry, that is wrong. We are headed to {answer}.</SummaryText>
        )} */}
        <SummaryText>We are headed to:</SummaryText><SummaryBigText>{answer}</SummaryBigText><br />
        <SummaryText>Your score:</SummaryText><SummaryBigText>{score}</SummaryBigText>
      </SummaryContainer>

      {isShown && <ClueExplanation />}
      <ButtonContainer>
        <RestartButton type="button" onClick={onRestartButton}>RESTART</RestartButton>
        <RestartButton type="button" onClick={handleClick}>{buttonText}</RestartButton>
      </ButtonContainer>

    </div>
  );
}