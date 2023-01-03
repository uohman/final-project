import { createSlice } from '@reduxjs/toolkit'

// import { ui } from './ui';

const initialState = {
  correctAnswer: '',
  score: 0
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCorrectAnswer: (store, actions) => {
      store.answers = actions.payload
    },
    setScore: (store, actions) => {
      store.gameOver = actions.payload
    }
  }
});
