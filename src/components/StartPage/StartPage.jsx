/* eslint-disable max-len */
import React from 'react';
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { questions, fetchQuestions } from 'reducers/questions';

// import { Questions } from 'components/Questions/Questions'

export const StartPage = ({ onStepChange }) => {
  return (
    <div>
      <h1>This is StreetSmart!</h1>
      <h2>Can you figure out where we are headed?</h2>

      <button type="button" className="button" onClick={onStepChange}>START</button>

    </div>
  );
}
