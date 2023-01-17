import styled from 'styled-components/macro'
import { PrimaryButton } from 'GlobalStyles';

export const MapillaryContainer = styled.div`
    position: relative;
    z-index: 1;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 2;
    width: 100vw;

    @media (max-width: 767.98px) {
        flex-direction: column;
        left: 0;
    }
`

export const ClueButton = styled(PrimaryButton)`
    color: var(--color-white);
    background: var(--color-secondary);
    margin: 0.7rem;
`

export const GuessButton = styled(ClueButton)`
    background: var(--color-primary);
    text-transform: none;
    letter-spacing: 0;
`