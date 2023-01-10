/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from 'reducers/game';
import swal from 'sweetalert';

import { Mapillary } from 'components/Mapillary/Mapillary';
// import { Answering } from 'components/Answering/Answering'
import { OuterWrapper, InnerWrapper } from 'GlobalStyles';
import { MapillaryContainer, ClueContainer, LoadingParagraph, SpecialSpan, ClueParagraph, AnotherClueButton } from './Clues.Styles'

export const Clues = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentClue, setCurrentClue] = useState(0);
  const [level, setLevel] = useState(5);
  // const [imageId, setImageId] = useState('2978574139073965')

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
    if (currentClue < 4) { //*  Show alert if clue index > 4
      setLevel(level - 1);
    /*     if (currentClue === 1) setImageId('461631028397375')
      if (currentClue === 2) setImageId('2978574139073965') */
    } else {
      swal('Time to make a guess!', {
        button: 'OK'
      });
    }
    dispatch(game.actions.setScore(currentScore - 1));
  };

  useEffect(() => {
    fetchClues()
  }, [])

  const activeClue = games[currentClue];

  if (loading) {
    return (
      <OuterWrapper>
        <InnerWrapper>
          <LoadingParagraph>Loading clues...</LoadingParagraph>
        </InnerWrapper>
      </OuterWrapper>)
  }

  if (currentClue < 5) { //* Stop showing clues after clue 5
    return (
      <div>
        <MapillaryContainer>
          {console.log(currentClue)}
          <Mapillary width="auto" height="94vh" imageId={currentClue === 0 ? '343242160559702' : currentClue === 1 ? '463849228173207' : currentClue === 2 ? '273852291114652' : currentClue === 3 ? '953489715410448' : currentClue === 4 ? '814918985897976' : ''} />
        </MapillaryContainer>
        <ClueContainer>

          <SpecialSpan>Level: {level}</SpecialSpan>
          <ClueParagraph>{activeClue && activeClue.gameOne}</ClueParagraph>

          <AnotherClueButton type="button" onClick={() => handleClick()}>I need another clue</AnotherClueButton>
        </ClueContainer>
      </div>
    )
  }
}