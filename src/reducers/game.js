import { createSlice } from '@reduxjs/toolkit'

// import { ui } from './ui';

const initialState = {
  correctAnswer: '',
  userAnswer: '',
  score: 4
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCorrectAnswer: (store, actions) => {
      store.correctAnswer = actions.payload
    },
    setUserAnswer: (store, actions) => {
      store.correctAnswer = actions.payload
    },
    setScore: (store, actions) => {
      store.score = actions.payload
    }
  }
});
