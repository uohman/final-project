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
    border-bottom: 4px solid var(--color-black);
    margin-bottom: 0.5rem;
`

export const AnotherClueButton = styled(PrimaryButton)`
    text-transform: none;
    letter-spacing: 0;
`