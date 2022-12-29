import styled from 'styled-components/macro'
import { PrimaryButton } from 'GlobalStyles';

export const ButtonContainer = styled.div`
    // outline: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SecondaryButton = styled(PrimaryButton)`
    background: transparent;
    color: var(--color-black);
    text-transform: none;
    letter-spacing: 0;
    margin-top: 0;

    :hover {
        color: var(--color-black);
        transform: scale(1.1);
    }
`