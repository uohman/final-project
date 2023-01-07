import React from 'react';
import { useSelector } from 'react-redux';

import { Mapillary } from 'components/Mapillary/Mapillary';

import { NavBar } from 'components/NavBar/NavBar';
// import { Subheading } from 'GlobalStyles';
import { MapillaryContainer, SummaryContainer, SummaryText, ButtonContainer, RestartButton } from './Summary.Styles'

export const Summary = () => {
/*   const answers = useSelector((state) => state.quiz.answers);
  const result = answers.filter((answer) => answer.isCorrect).length; */

  /*   const correct = props.autocompleteCities === 'Vienna, Austria'
  const wrong = props.autocompleteCities !== 'Vienna, Austria' */

  const answer = useSelector((store) => store.game.correctAnswer)
  const score = useSelector((store) => store.game.score)

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
        <SummaryText>We are headed to {answer}.</SummaryText>
        <SummaryText>Your score: {score}</SummaryText>
      </SummaryContainer>
      <ButtonContainer>
        <RestartButton type="button" onClick={onRestartButton}>RESTART</RestartButton>
      </ButtonContainer>
    </div>
  );
}