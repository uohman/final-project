/* eslint-disable max-len */
import React from 'react';

import { AboutHeading, AboutParagraph } from './About.Styles';

export const About = () => {
  return (
    <div>
      <AboutHeading>About StreetSmart</AboutHeading>
      <AboutParagraph>
        StreetSmart is a quiz game where the answer should be a name of a city anywhere in the world. The score is based on which level the right answer has been given. If the answer is correct, the score will be given accordingly. If the answer is wrong, the score will be 0.
        <br />This online game was made by Ulrika Öhman as my final project for the Technigo frontend developer bootcamp 2022/2023.
        <br />The frontend of StreetSmart was developed in React JS and Redux. The backend was developed in Node.js using Express API and Mongoose and MongoDB for the database.
        <br />The street views are from Mapillary.com.
      </AboutParagraph>
    </div>
  );
}
