import styled from 'styled-components/macro'
import { PrimaryButton } from 'GlobalStyles';

export const MapillaryContainer = styled.div`
position: relative;
z-index: 1;
`

export const SummaryContainer = styled.section`
    //outline: 2px solid red;
    background: rgb(239,211,219,0.8);
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
/*     border: 1px solid var(--color-secondary);
    box-shadow: 7px 7px var(--color-secondary); */
`

export const SummaryText = styled.h2`
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
    /* margin: 0.5rem; */
`

export const SummaryBigText = styled(SummaryText)`
    font-size: 2rem;
`

export const ButtonContainer = styled.div`
    /* outline: 2px solid red; */
    display: flex;
    align-items: center;
    //justify-content: center;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 2rem;
    /* left: 2rem; */
    /* right: 2rem; */
    z-index: 2;
    width: 100vw;
`

export const RestartButton = styled(PrimaryButton)`
    color: var(--color-white);
    background: var(--color-secondary);
    margin: 0 2rem;
`