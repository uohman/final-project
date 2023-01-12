import styled from 'styled-components/macro'
import { Subheading, Span, Paragraph, PrimaryButton } from 'GlobalStyles';

export const ClueContainer = styled.section`
    background: rgb(64, 49, 245, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    margin-top: 3vh;
    width: 40vw;
    position: fixed;
    bottom: 7rem;
    left: 2rem;
    z-index: 2;
    box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`

export const LoadingParagraph = styled(Paragraph)`
    text-align: center;
`

export const SpecialSpan = styled(Span)`
    color: var(--color-white);
    border-bottom: 4px solid var(--color-white);
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-transform: none;
    letter-spacing: 0;
    text-align: left;
`

export const ClueText = styled(Subheading)`
    color: var(--color-white);
`

export const AnotherClueButton = styled(PrimaryButton)`
    background: transparent;
    border: 2px solid var(--color-white);
    color: var(--color-white);
    text-transform: none;
    letter-spacing: 0;

    :hover {
        color: var(--color-white);
    }
`

export const MapillaryContainer = styled.div`
position: relative;
z-index: 1;
`