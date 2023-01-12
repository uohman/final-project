import styled from 'styled-components/macro'

import { Span, Paragraph } from 'GlobalStyles';

export const ClueExplanationContainer = styled.section`
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: column;
    padding: 2rem;
    width: 40vw;
    height: 70vh;
    position: fixed;
    bottom: 7rem;
    right: 2rem;
    z-index: 2;
    overflow: auto;
    box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`

export const ClueExplanationSubheading = styled(Span)`
    text-align: right;
    color: var(--color-white);
    font-size: 1.2rem;
`

export const ClueExplanationParagraph = styled(Paragraph)`
    margin: 0 1rem 1rem;
    text-align: justify;
    color: var(--color-white);
`