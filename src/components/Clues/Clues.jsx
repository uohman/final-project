/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from 'reducers/game';
import swal from 'sweetalert';
import { Mapillary } from 'components/Mapillary/Mapillary';
import { Loading } from 'components/Loading/Loading';

import { OuterWrapper, InnerWrapper } from 'GlobalStyles';
import { ClueWrapper, MapillaryContainer, ClueContainer, SpecialSpan, ClueText, AnotherClueButton } from './Clues.Styles'

export const Clues = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentClue, setCurrentClue] = useState(0);
  const [level, setLevel] = useState(5);

  //* Fetching clues
  const fetchClues = () => {
    setLoading(true);
    fetch('https://final-project-api-veooltntuq-lz.a.run.app/games')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setGames(response.games)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  //* Setting current score
  const currentScore = useSelector((store) => store.game.score);
  const dispatch = useDispatch();

  const handleClick = () => {
    setCurrentClue(currentClue + 1);
    if (currentClue < 4) {
      dispatch(game.actions.setScore(currentScore - 1)); //* If clue index < 4 = Set score to -1
      setLevel(level - 1);
    } else {
      dispatch(game.actions.setScore(currentScore === 1)); //* If clue index > 4 = Set score to 1
      swal('Time to make a guess!', {
        button: 'OK'
      });
    }
  };

  useEffect(() => {
    fetchClues()
  }, [])

  const activeClue = games[currentClue];

if (loading) {
    return (
      <OuterWrapper>
        <InnerWrapper>
          <Loading />
        </InnerWrapper>
      </OuterWrapper>)
  }

  if (currentClue < 5) { //* Stop showing clues after clue 5
    return (
      <div>
            <MapillaryContainer>
              <Mapillary width="auto" height="100vh" imageId={currentClue === 0 ? '343242160559702' : currentClue === 1 ? '463849228173207' : currentClue === 2 ? '273852291114652' : currentClue === 3 ? '953489715410448' : currentClue === 4 ? '814918985897976' : ''} />
            </MapillaryContainer>
            <ClueWrapper>
              <ClueContainer>
                <SpecialSpan>{level} points</SpecialSpan>
                <ClueText>{activeClue && activeClue.gameOne}</ClueText>
                <AnotherClueButton type="button" onClick={() => handleClick()}>I need another clue</AnotherClueButton>
              </ClueContainer>
            </ClueWrapper>
      </div>
    )
  } else {
    return (
      <div>
            <MapillaryContainer>
              <Mapillary width="auto" height="100vh" imageId="814918985897976" />
            </MapillaryContainer>
      </div>
    )
  }
}