import styled from 'styled-components/macro'
import { PrimaryButton } from 'GlobalStyles';

export const MapillaryContainer = styled.div`
position: relative;
z-index: 1;
`

export const SummaryContainer = styled.section`
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

export const SummaryText = styled.h2`
    font-family: var(--font-primary);
    color: var(--color-white);
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
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

export const RestartButton = styled(PrimaryButton)`
    color: var(--color-white);
    background: var(--color-secondary);
    margin: 0.7rem;
`