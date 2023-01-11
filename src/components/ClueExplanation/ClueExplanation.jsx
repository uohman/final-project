/* eslint-disable max-len */
import React from 'react';

import { ClueExplanationContainer, ClueExplanationSubheading, ClueExplanationParagraph } from './ClueExplanation.Styles'

export const ClueExplanation = () => {
  return (
    <ClueExplanationContainer>
      <ClueExplanationSubheading>Clue 1</ClueExplanationSubheading>
      <ClueExplanationParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </ClueExplanationParagraph>
      <ClueExplanationSubheading>Clue 2</ClueExplanationSubheading>
      <ClueExplanationParagraph>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </ClueExplanationParagraph>
      <ClueExplanationSubheading>Clue 3</ClueExplanationSubheading>
      <ClueExplanationParagraph>
      ”…you might be able to see a musical or an opera here too.”  We are of course referring to the musical Chicago — the longest-running American musical in Broadway history — and the opera is making a reference to Chicago being the hometown of Oprah Winfrey.
      </ClueExplanationParagraph>
      <ClueExplanationSubheading>Clue 4</ClueExplanationSubheading>
      <ClueExplanationParagraph>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </ClueExplanationParagraph>
      <ClueExplanationSubheading>Clue 5</ClueExplanationSubheading>
      <ClueExplanationParagraph>
      The city of Chicago has been known by many nicknames, but it is most widely recognized as the ”Windy City”.
      </ClueExplanationParagraph>
      {/* <button type="button">Back</button> */}
    </ClueExplanationContainer>
  );
}