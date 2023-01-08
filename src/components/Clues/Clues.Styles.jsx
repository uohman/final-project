import styled from 'styled-components/macro'
import { Span, Paragraph, PrimaryButton } from 'GlobalStyles';

export const ClueContainer = styled.section`
    //outline: 2px solid red;
    /* background: rgb(64, 49, 245, 0.85); */
    /* background: rgb(239,211,219,0.85); */
    background: rgb(255,255,255,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    margin-top: 3vh;
    width: 40vw;
    /* border-radius: 15px; */
    position: fixed;
    bottom: 7rem;
    left: 2rem;
    z-index: 2;
    border: 1px solid var(--color-secondary);
    box-shadow: 7px 7px var(--color-secondary);
`

export const SpecialSpan = styled(Span)`
    // font-size: 1rem;
    // text-decoration: underline;
    color: var(--color-primary);
    border-bottom: 4px solid var(--color-primary);
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
    color: var(--color-primary);
`

export const AnotherClueButton = styled(PrimaryButton)`
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    text-transform: none;
    letter-spacing: 0;

    :hover {
        // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
        color: var(--color-primary);
    }
`

export const MapillaryContainer = styled.div`
position: relative;
z-index: 1;
`