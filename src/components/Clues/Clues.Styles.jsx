import styled from 'styled-components/macro'
import { PrimaryButton } from 'GlobalStyles';

export const ButtonContainer = styled.div`
    outline: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const SecondaryButton = styled(PrimaryButton)`
    background-color: var(--color-secondary);
    text-transform: none;
    letter-spacing: 0;
`