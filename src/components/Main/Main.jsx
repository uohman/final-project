import React from 'react';
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { questions } from 'reducers/questions';
// import { ui } from 'reducers/ui';

// import { Header } from 'components/Header/Header'
import { StartPage } from 'components/StartPage/StartPage'
import { Clues } from 'components/Clues/Clues'

/* const reducer = combineReducers({
  quiz: questions.reducer
});

const store = configureStore({ reducer }); */

export const Main = () => {
/*   const reducer = combineReducers({
    questions: questions.reducer,
    ui: ui.reducer
  })
  const store = configureStore({ reducer }) */

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<StartPage />} />
            <Route path="/clues" element={<Clues />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}