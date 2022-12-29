import styled from 'styled-components/macro'
import { Paragraph } from 'GlobalStyles';

export const Label = styled(Paragraph)`
    font-size: 1.5rem;
`

export const Input = styled.input`
    border: none;
    background-color: var(--color-white);
    outline-color: var(--color-black);
    padding: 10px;
    width: 100%;
    font-family: var(--font-primary);
    font-size: 1rem;
    text-align: center;
    margin: 1rem 0 0.5rem;
`

export const Span = styled(Paragraph)`
    font-size: 0.8rem;
`