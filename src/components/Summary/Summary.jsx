import React from 'react';
// import { useSelector } from 'react-redux';
import { Subheading } from 'GlobalStyles';

export const Summary = (props) => {
/*   const answers = useSelector((state) => state.quiz.answers);
  const result = answers.filter((answer) => answer.isCorrect).length; */

  /*   const correct = props.autocompleteCities === 'Vienna, Austria'
  const wrong = props.autocompleteCities !== 'Vienna, Austria' */

  /* const score = useSelector((store) => store.game.score)
  const answer = useSelector((store) => store.game.correctAnswer) */

  return (
    <div>
      <Subheading>Summary</Subheading>
      <p>{props.autocompleteCities}</p>
      {/*       <div>
        {correct && (
          <p>That is right! We are headed to {result}.</p>
        )}
        {wrong && (
          <p>Sorry, that is wrong. We are headed to {result}.</p>
        )}
      </div> */}
    </div>
  );
}