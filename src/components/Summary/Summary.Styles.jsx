import styled from 'styled-components/macro'
import { PrimaryButton } from 'GlobalStyles';

export const MapillaryContainer = styled.div`
position: relative;
z-index: 1;
`

export const SummaryWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

export const SummaryContainer = styled.section`
    background: rgb(239,211,219);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2.5rem;
    width: 40vw;
    margin: 3vh 0;
    position: fixed;
    bottom: 6rem;
    left: 2rem;
    z-index: 2;
    box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

    @media (max-width: 767.98px) {
        width: 80vw;
        bottom: 11rem;
        left: unset;
        padding: 1rem;
        margin: 0 auto;
    }
`

export const SummaryText = styled.h2`
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
`

export const SummaryBigText = styled(SummaryText)`
    font-size: 2rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 2rem;
    z-index: 2;
    width: 100vw;

    @media (max-width: 767.98px) {
        flex-direction: column;
        left: 0;
    }
`

export const RestartButton = styled(PrimaryButton)`
    color: var(--color-white);
    background: var(--color-secondary);
    margin: 0 2rem;

    @media (max-width: 767.98px) {
        margin: 0.7rem;
    }
`