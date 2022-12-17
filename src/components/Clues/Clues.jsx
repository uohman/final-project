/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import { fetchQuestions } from 'api';

import { SingleClue } from 'components/SingleClue/SingleClue';

export const Clues = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      This is the question component
      <button type="button" onClick={handleClick}>CLUE</button>
      {isShown && <SingleClue />}
      <Link to="/guess">
        <button type="button" className="button">Stop! I want to make a guess!</button>
      </Link>
    </div>
  );
}