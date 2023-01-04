import styled from 'styled-components/macro'
import { PrimaryButton } from 'GlobalStyles';

export const MapillaryContainer = styled.div`
position: relative;
z-index: 1;
`

export const ButtonContainer = styled.div`
    //outline: 1px solid red;
    display: flex;
    align-items: center;
    //justify-content: center;
    flex-direction: row;
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 2;
    width: 100vw;
`

export const ClueButton = styled(PrimaryButton)`
    color: var(--color-white);
    background: var(--color-secondary);
    margin: 0.7rem;
    //z-index: 2;
    //position: absolute;
    
    /* :hover {
        color: var(--color-black);
    } */
`

export const GuessButton = styled(ClueButton)`
    background: var(--color-primary);
    text-transform: none;
    letter-spacing: 0;
    // margin-top: 0;
`