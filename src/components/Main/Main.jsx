import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { questions } from 'reducers/questions';
import { ui } from 'reducers/ui';

import { NavBar } from 'components/NavBar/NavBar';
import { StartPage } from 'components/StartPage/StartPage'
// import { SingleClue } from 'components/SingleClue/SingleClue';
import { Clues } from 'components/Clues/Clues'
import { Answering } from 'components/Answering/Answering'
import { Summary } from 'components/Summary/Summary';
import { InnerWrapper, OuterWrapper } from 'GlobalStyles';
// import { NotFound } from 'components/NotFound/NotFound'

const reducer = combineReducers({
  ui: ui.reducer
});

const store = configureStore({ reducer });

export const Main = () => {
  const [step, setStep] = useState(1);
  /*   const reducer = combineReducers({
    questions: questions.reducer,
    ui: ui.reducer
  })
  const store = configureStore({ reducer }) */

  const handleStepChange = () => {
    setStep(step + 1);
  };

  return (
    <Provider store={store}>
      <NavBar />
      <OuterWrapper>
        <InnerWrapper>
          {step === 1 && <StartPage onStepChange={handleStepChange} />}
          {step === 2 && <Clues onStepChange={handleStepChange} />}
          {step === 3 && <Answering onStepChange={handleStepChange} />}
          {step === 4 && (<Summary />)}
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
}