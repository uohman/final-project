/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import { fetchQuestions } from 'api';

// import { StreetView } from 'components/StreetView';
import { SingleClue } from 'components/SingleClue/SingleClue';

export const Clues = () => {
  const [isShown, setIsShown] = useState(false);
  const [toggleButton, setToggleButton] = useState(true);

  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleButton(!toggleButton)
  };

  return (
    <div>
      This is the question component
      {/* <StreetView /> */}
      {isShown && <SingleClue />}
      {toggleButton && <button type="button" onClick={handleClick}>CLUE</button>}
      <Link to="/guess">
        <button type="button" className="button">Stop! I want to make a guess!</button>
      </Link>

    </div>
  );
}