import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { game } from 'reducers/game';

import { StartPage } from 'components/StartPage/StartPage'
import { ClueWrapper } from 'components/ClueWrapper/ClueWrapper'
import { Answering } from 'components/Answering/Answering'
import { Summary } from 'components/Summary/Summary';

const reducer = combineReducers({
  game: game.reducer
})
const store = configureStore({ reducer })

export const Main = () => {
  const [step, setStep] = useState(1);

  const handleStepChange = () => {
    setStep(step + 1);
  };

  return (
    <Provider store={store}>
      {step === 1 && <StartPage onStepChange={handleStepChange} />}
      {step === 2 && <ClueWrapper onStepChange={handleStepChange} />}
      {step === 3 && <Answering onStepChange={handleStepChange} />}
      {step === 4 && (<Summary />)}
    </Provider>
  );
}