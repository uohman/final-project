import styled from 'styled-components/macro'
import { Span, PrimaryButton } from 'GlobalStyles';

export const SingleClueContainer = styled.section`
    // outline: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3vh;
`

export const SpecialSpan = styled(Span)`
    // font-size: 1rem;
    // text-decoration: underline;
    color: var(--color-white);
    border-bottom: 4px solid var(--color-white);
    font-size: 2rem;
    margin-bottom: 0.5rem;
/*  position: fixed;
    top: 5rem;
    right: 2rem;
    z-index: 2; */
`

export const AnotherClueButton = styled(PrimaryButton)`
    //color: var(--color-primary);
    text-transform: none;
    letter-spacing: 0;
`