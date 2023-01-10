import styled from 'styled-components/macro'
import { Span, Paragraph, PrimaryButton } from 'GlobalStyles';

export const ClueContainer = styled.section`
    //outline: 2px solid red;
    background: rgb(64, 49, 245, 0.5);
    /* background: rgb(239,211,219,0.8); */
    /* background: rgb(255,255,255,0.75); */
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
    box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
 /*    border: 1px solid var(--color-secondary);
    box-shadow: 7px 7px var(--color-secondary); */
`

export const LoadingParagraph = styled(Paragraph)`
    text-align: center;
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
    color: var(--color-white);
    text-transform: none;
    letter-spacing: 0;

    :hover {
        // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
        color: var(--color-white);
    }
`

export const MapillaryContainer = styled.div`
position: relative;
z-index: 1;
`