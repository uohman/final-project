/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import { fetchQuestions } from 'api';

// import { StreetView } from 'components/StreetView';
import { SingleClue } from 'components/SingleClue/SingleClue';
import { Mapillary } from 'components/Mapillary/Mapillary';

export const Clues = () => {
  const [isShown, setIsShown] = useState(false); // Show SingleClue component
  const [toggleClueButton, setToggleClueButton] = useState(true); // Show/hide CLUE button
  /* const [showKeepGoingButton, setShowKeepGoingButton] = useState(false); // Show keep on going button */
  /* const [toggleKeepGoingButton, setToggleKeepGoingButton] = useState(false); */

  const handleClick = () => {
    setIsShown((current) => !current);
    setToggleClueButton(!toggleClueButton);
    /* setShowKeepGoingButton((current) => !current); */
    /* setToggleKeepGoingButton(!toggleKeepGoingButton); */
  };

  return (
    <div>
      This is the Clues component
      <Mapillary width="500px" height="300px" imageId="498763468214164" />

      {isShown && <SingleClue />}
      {toggleClueButton && <button type="button" onClick={handleClick}>CLUE</button>}

      {/* {toggleKeepGoingButton && <button type="button" onClick={handleClick}>I want to keep on going</button>} */}
      <Link to="/guess">
        <button type="button" className="button">I want to make a guess!</button>
      </Link>

    </div>
  );
}