import styled from 'styled-components/macro'

import { Span, Paragraph } from 'GlobalStyles';

export const ClueExplanationWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

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
    bottom: 6rem;
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

    @media (max-width: 767.98px) {
        width: 80vw;
        height: 55vh;
        bottom: 10rem;
        right: unset;
        padding: 1rem;
        margin: 0 auto;
    }

    @media (min-width: 1400px) {
        width: 30vw;
        height: 65vh;
    }
`

export const ClueExplanationSubheading = styled(Span)`
    text-align: right;
    color: var(--color-white);
`

export const ClueExplanationParagraph = styled(Paragraph)`
    margin: 0 1rem 1rem;
    text-align: justify;
    color: var(--color-white);
`