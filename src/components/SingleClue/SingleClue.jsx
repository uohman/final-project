import React, { useState, useEffect } from 'react';
// import { questions } from 'reducers/questions';

// import { Answering } from 'components/Answering/Answering'
import { Paragraph } from 'GlobalStyles';
import { SingleClueContainer, SpecialSpan, AnotherClueButton } from './SingleClue.Styles'

export const SingleClue = () => {
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

  const handleClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 5) {
      /* setCurrentQuestion(nextQuestion) && */ setLevel(level - 1);
    } else {
      alert('Time to make a guess');
    }
    setCurrentQuestion(nextQuestion);
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
        <div>
          <div>
            <SpecialSpan>Level: {level}</SpecialSpan>
            {/* <span>Clue {currentQuestion + 1}:</span> */}
            <Paragraph>{activeQuestion && activeQuestion.gameOne}</Paragraph>
          </div>
        </div>
        <AnotherClueButton type="button" onClick={() => handleClick()}>I want another clue</AnotherClueButton>
      </SingleClueContainer>
    )
  }
}