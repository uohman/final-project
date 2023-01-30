/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

import { ClueExplanationWrapper, ClueExplanationContainer, ClueExplanationSubheading, ClueExplanationParagraph } from './ClueExplanation.Styles'

export const ClueExplanation = () => {
  const [games, setGames] = useState([])

  //* Fetching clue explanations
  useEffect(() => {
    fetch('https://final-project-api-veooltntuq-lz.a.run.app/games')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setGames(response.games)
      })
  }, [games]);

  return (
    <ClueExplanationWrapper>
      <ClueExplanationContainer>
        <ClueExplanationSubheading>5 points</ClueExplanationSubheading>
        <ClueExplanationParagraph>{games.length ? games[0].clueExplanation : ''} </ClueExplanationParagraph>
        <ClueExplanationSubheading>4 points</ClueExplanationSubheading>
        <ClueExplanationParagraph>{games.length ? games[1].clueExplanation : ''} </ClueExplanationParagraph>
        <ClueExplanationSubheading>3 points</ClueExplanationSubheading>
        <ClueExplanationParagraph>{games.length ? games[2].clueExplanation : ''} </ClueExplanationParagraph>
        <ClueExplanationSubheading>2 points</ClueExplanationSubheading>
        <ClueExplanationParagraph>{games.length ? games[3].clueExplanation : ''} </ClueExplanationParagraph>
        <ClueExplanationSubheading>1 point</ClueExplanationSubheading>
        <ClueExplanationParagraph>{games.length ? games[4].clueExplanation : ''} </ClueExplanationParagraph>
      </ClueExplanationContainer>
    </ClueExplanationWrapper>
  );
}