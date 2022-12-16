import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui';

const initialState = {
  startGame: false,
  currentClue: '',
  answers: '',
  gameOver: false
}

export const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setStartGame: (store, actions) => {
      store.startGame = actions.payload
    },
    setCurrentClue: (store, actions) => {
      store.currentClue = actions.payload
    },
    setAnswers: (store, actions) => {
      store.answers = actions.payload
    },
    setGameOver: (store, actions) => {
      store.gameOver = actions.payload
    }
  }
});

export const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    const option = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch('https://final-project-api-veooltntuq-lz.a.run.app/questions', option)
      .then((resp) => resp.json())
      .then((getQuestions) => console.log('getQuestions', getQuestions))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}