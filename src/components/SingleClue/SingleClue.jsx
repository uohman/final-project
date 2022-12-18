import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import { questions } from 'reducers/questions';
// import { index } from 'api';

export const SingleClue = () => {
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

  return (
    <div>
      <div> <h2>{questions.length ? questions[0].clue1 : ''}</h2> </div>
      {/* {questions.map((question, id) => (
        id === 0 ? <div key={id}><h2>{question.clue1}</h2></div> : null))} */}
      {/* {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.clue1}</h2>
          <p>{question.clue2}</p>
        </div>
      ))} */}
    </div>
  )
}

/* export const SingleClue = () => {
    const [questions, setQuestions] = useState([])

    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setQuestions(data)
        })
    }

    useEffect(() => {
      fetchData()
    }, [])

    return (
      <div>
        <ul>
          {questions.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

      </div>
    )
  } */

/* export const SingleClue = () => {
    const [clues, setClues] = useState([]);

    const fetchQuestions = () => {
      fetch('https://final-project-api-veooltntuq-lz.a.run.app/questions')
        .then((response) => response.json())
        .then((data) => setClues(data));
      // .then((questions) => console.log('questions', questions))
    }

    useEffect(() => {
      fetchQuestions();
    }, []);

    return (
      <div>
        This is the single clue component
        <ul>
          {clues && clues.map((clue) => (
            <li key={clue.id}>{clue.clue1}</li>
          ))}
        </ul>
        <button type="button" className="button">I want to keep on going</button>
        <Link to="/guess">
          <button type="button" className="button">Stop! I want to make a guess!</button>
        </Link>
      </div>
    );
  } */