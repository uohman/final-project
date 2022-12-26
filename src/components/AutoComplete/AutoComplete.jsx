/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { fetchPlace } from 'api/index.js';

export const AutoComplete = () => {
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState('');

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);
    !autocompleteCities.includes(e.target.value)
      && res.features
      && setAutocompleteCities(res.features.map((place) => place.place_name));
    res.error ? setAutocompleteErr(res.error) : setAutocompleteErr('');
  };

  return (
    <form>
      <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <label htmlFor="city" className="label">
            We are headed to:
            {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )}
          </label>
          <input
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
          <span className="placesAutocomplete__hint">
            *start typing and choose city from the given options
          </span>
          <Link to="/summary">
            <button type="submit">Submit</button>
          </Link>
        </div>
      </div>
    </form>
  );
};