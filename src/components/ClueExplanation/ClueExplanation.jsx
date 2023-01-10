/* eslint-disable max-len */
import React from 'react';

import { ClueExplanationContainer, ClueExplanationParagraph } from './ClueExplanation.Styles'

export const ClueExplanation = () => {
  return (
    <ClueExplanationContainer>
      <ClueExplanationParagraph>
        Clue 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </ClueExplanationParagraph>
      <ClueExplanationParagraph>
        Clue 2:<br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </ClueExplanationParagraph>
      <ClueExplanationParagraph>
        Clue 3: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ClueExplanationParagraph>
      <ClueExplanationParagraph>
        Clue 4: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </ClueExplanationParagraph>
      <ClueExplanationParagraph>
        Clue 5: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
      </ClueExplanationParagraph>
      {/* <button type="button">Back</button> */}
    </ClueExplanationContainer>
  );
}