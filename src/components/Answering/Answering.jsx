/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlace } from 'api/index.js';
import { game } from 'reducers/game';

import { NavBar } from 'components/NavBar/NavBar';

import { OuterWrapper, InnerWrapper, Wrapper, PrimaryButton } from 'GlobalStyles';
import { Label, Input, Span } from './Answering.Styles'

// import { AutoComplete } from 'components/AutoComplete/AutoComplete';

export const Answering = ({ onStepChange }) => {
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');

  /// Handling and fetching cities for auto complete
  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value)
      && res.features
      && setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr('');
  };

  const dispatch = useDispatch()

  const onSubmitAnswer = (event) => {
    event.preventDefault(event);
    // get correct answer from backend
    const correctAnswer = 'Vienna, Austria';
    // if answer === correct answer set score to an intended value
    const scoreFromReduxStore = useSelector((reduxStore) => reduxStore.game.score);
    const scoreValueThatTheUserGets = scoreFromReduxStore + 1;
    dispatch(game.actions.setScore(scoreValueThatTheUserGets))
    dispatch(game.actions.setCorrectAnswer(correctAnswer));
  };

  return (
    <div>
      <NavBar />
      <OuterWrapper>
        <InnerWrapper>
          <form onSubmit={(event) => onSubmitAnswer(event)}>
            <div className="placesAutocomplete">
              <Wrapper className="placesAutocomplete__inputWrap">
                <Label htmlFor="city" className="label">
                  We are headed to:
                  {autocompleteErr && (
                    <span className="inputError">{autocompleteErr}</span>
                  )}
                </Label>
                <Input
                  list="places"
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleCityChange}
                  value={city}
                  required
                  pattern={autocompleteCities.join('|')}
                  autoComplete="off" />
                <datalist id="places">
                  {autocompleteCities.map((singleCity) => (
                    <option key={singleCity}>{singleCity}</option>
                  ))}
                </datalist>
                <Span className="placesAutocomplete__hint">
                *start typing and choose city from the given options
                </Span>
                <PrimaryButton type="submit" onClick={onStepChange}>Submit</PrimaryButton>
              </Wrapper>
            </div>
          </form>
        </InnerWrapper>
      </OuterWrapper>
    </div>
  );
};