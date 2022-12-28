import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import { questions } from 'reducers/questions';

import { Answering } from 'components/Answering/Answering'
import { SingleClueContainer } from './SingleClue.Styles'

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
    return <p>Loading clues...</p>
  }

  if (nextQuestion > 5) {
    return <Answering />;
  } else {
    return (
      <SingleClueContainer>
        <div>
          <div>
            <span>Clue {currentQuestion + 1}:</span>
            <h2>{activeQuestion && activeQuestion.gameOne}</h2>
          </div>
        </div>

        <h3>Current level: {level}</h3>
        {/* <h2>{questions.length ? questions[0].clue1 : ''}</h2> */}
        <button type="button" onClick={() => handleClick()}>I want another clue</button>
        <Link to="/guess">
          <button type="button" className="button">I want to make a guess!</button>
        </Link>

        {/* {questions.map((question, id) => (
        id === 0 ? <div key={id}><h2>{question.clue1}</h2></div> : null))} */}
        {/* {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.clue1}</h2>
          <p>{question.clue2}</p>
        </div>
      ))} */}
      </SingleClueContainer>
    )
  }
}