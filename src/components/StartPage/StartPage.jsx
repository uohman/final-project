/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { questions, fetchQuestions } from 'reducers/questions';

// import { Questions } from 'components/Questions/Questions'

export const StartPage = () => {
  return (
    <div>
      <h1>This is StreetSmart!</h1>
      <h2>The game where we are trying to answer the question: “Where are we headed?”</h2>
      <Link to="/clues">
        <button type="button" className="button">START</button>
      </Link>
    </div>
  );
}
