import styled from 'styled-components/macro'

import { Paragraph } from 'GlobalStyles';

export const ClueExplanationContainer = styled.section`
    //outline: 2px solid red;
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    /* margin-top: 3vh; */
    width: 40vw;
    height: 70vh;
    /* border-radius: 15px; */
    position: fixed;
    bottom: 7rem;
    right: 2rem;
    z-index: 2;
    overflow: auto;
    /* border: 4px solid var(--color-secondary); */
    /* box-shadow: 7px 7px var(--color-secondary); */
    box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`

export const ClueExplanationParagraph = styled(Paragraph)`
    margin: 0.5rem 0;
    text-align: justify;
    color: var(--color-white);
`