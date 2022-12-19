/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import { fetchQuestions } from 'api';

import { SingleClue } from 'components/SingleClue/SingleClue';

export const Clues = () => {
  const [isShown, setIsShown] = useState(false);
  const [questions, setQuestions] = useState([])

  const fetchData = () => {
    fetch('https://final-project-api-veooltntuq-lz.a.run.app/questions')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setQuestions(response.questions)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      This is the question component
      <div> <img src={questions.length ? questions[0].clue1ImgUrl : ''} alt="clue" /> </div>
      <button type="button" onClick={handleClick}>CLUE</button>
      {isShown && <SingleClue />}

      <Link to="/guess">
        <button type="button" className="button">Stop! I want to make a guess!</button>
      </Link>

    </div>
  );
}