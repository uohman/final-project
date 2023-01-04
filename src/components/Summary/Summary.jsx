import React from 'react';
import { useSelector } from 'react-redux';

import { Subheading } from 'GlobalStyles';

export const Summary = () => {
/*   const answers = useSelector((state) => state.quiz.answers);
  const result = answers.filter((answer) => answer.isCorrect).length; */

  /*   const correct = props.autocompleteCities === 'Vienna, Austria'
  const wrong = props.autocompleteCities !== 'Vienna, Austria' */

  const answer = useSelector((store) => store.game.correctAnswer)
  const score = useSelector((store) => store.game.score)

  return (
    <div>
      <Subheading>Summary</Subheading>
      {/* <p>{props.autocompleteCities}</p> */}
      <p>We are headed to {answer}.</p>
      <p>Your score: {score}</p>
    </div>
  );
}