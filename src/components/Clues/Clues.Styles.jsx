import styled from 'styled-components/macro'
import { Span, Paragraph, PrimaryButton } from 'GlobalStyles';

export const ClueContainer = styled.section`
    //outline: 2px solid red;
    background: rgb(64, 49, 245, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    margin-top: 3vh;
    width: 40vw;
    border-radius: 15px;
    position: fixed;
    bottom: 7rem;
    left: 2rem;
    z-index: 2;
`

export const SpecialSpan = styled(Span)`
    // font-size: 1rem;
    // text-decoration: underline;
    color: var(--color-white);
    border-bottom: 4px solid var(--color-white);
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-transform: none;
    letter-spacing: 0;
    text-align: left;
/*  position: fixed;
    top: 5rem;
    right: 2rem;
    z-index: 2; */
`

export const ClueParagraph = styled(Paragraph)`
    color: var(--color-white);
`

export const AnotherClueButton = styled(PrimaryButton)`
    background: transparent;
    border: 2px solid var(--color-white);
    text-transform: none;
    letter-spacing: 0;
`