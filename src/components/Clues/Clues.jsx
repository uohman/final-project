import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game } from 'reducers/game';

import swal from 'sweetalert';

// import { Answering } from 'components/Answering/Answering'
import { Paragraph } from 'GlobalStyles';
import { SingleClueContainer, SpecialSpan, ClueParagraph, AnotherClueButton } from './Clues.Styles'

export const Clues = () => {
  const [games, setGames] = useState([]) // Fetch clues
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [level, setLevel] = useState(5);

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
  const currentScore = useSelector((store) => store.game.score);
  const dispatch = useDispatch();

  const handleClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      /* setCurrentQuestion(nextQuestion) && */ setLevel(level - 1);
    } else {
      swal('Time to make a guess!', {
        button: 'OK'
      });
    }
    setCurrentQuestion(nextQuestion);
    dispatch(game.actions.setScore(currentScore - 1));
  };

  useEffect(() => {
    fetchClues()
  }, [])

  const activeQuestion = games[currentQuestion];

  const nextQuestion = currentQuestion + 1;

  if (loading) {
    return <Paragraph>Loading clues...</Paragraph>
  }

  if (nextQuestion < 6) {
    /* return <Answering />;
  } else { */
    return (
      <SingleClueContainer>

        <SpecialSpan>Level: {level}</SpecialSpan>
        {/* <span>Clue {currentQuestion + 1}:</span> */}
        <ClueParagraph>{activeQuestion && activeQuestion.gameOne}</ClueParagraph>

        <AnotherClueButton type="button" onClick={() => handleClick()}>I need another clue</AnotherClueButton>
      </SingleClueContainer>
    )
  }
}