/* eslint-disable max-len */
import React from 'react';

import { AboutHeading, AboutSubheading, AboutParagraph, Link } from './About.Styles';

export const About = () => {
  return (
    <div>
      <AboutHeading>About StreetSmart</AboutHeading>
      <AboutParagraph>
      StreetSmart is a quiz game where the task is to identify a destination location based on a series of clues that are revealed one after another. You only have one chance to guess the destination, so use it wisely.
      </AboutParagraph>
      <AboutSubheading>Who made this?</AboutSubheading>
      <AboutParagraph>
        This online game was made by me, <Link href="https://www.ulrikaohman.com/" target="_blank" rel="noreferrer">Ulrika Öhman</Link>, as my final project for the Technigo frontend developer bootcamp 2022/2023.
      </AboutParagraph>
      <AboutParagraph>
        The frontend of StreetSmart is developed with React, Redux and styled-components. The backend with Node.js (Express/Mongoose) and MongoDB.
      </AboutParagraph>
      <AboutParagraph>
        The street views are from <Link href="https://www.mapillary.com/" target="_blank" rel="noreferrer">Mapillary.com</Link>.
      </AboutParagraph>
    </div>
  );
}
