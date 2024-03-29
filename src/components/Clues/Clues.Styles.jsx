import styled from 'styled-components/macro'
import { OuterWrapper, Subheading, Span, Paragraph, PrimaryButton } from 'GlobalStyles';

export const OuterWrapperLoading = styled(OuterWrapper)`
    height: 94vh;
`

export const ClueWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

export const ClueContainer = styled.section`
    background: rgb(64, 49, 245, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    width: 40vw;
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
        top: 5rem;
        bottom: unset;
        left: unset;
        padding: 1rem;
        margin: 0 auto;
    }
`

export const LoadingParagraph = styled(Paragraph)`
    text-align: center;
`

export const SpecialSpan = styled(Span)`
    color: var(--color-white);
    border-bottom: 4px solid var(--color-white);
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-transform: none;
    letter-spacing: 0;
    text-align: left;

    @media (max-width: 767.98px) {
        font-size: 1.5rem;
    }
`

export const ClueText = styled(Subheading)`
    color: var(--color-white);

    @media (max-width: 767.98px) {
        font-size: 1.2rem;
        line-height: 1.5rem;
    }
`

export const AnotherClueButton = styled(PrimaryButton)`
    background: transparent;
    border: 2px solid var(--color-white);
    color: var(--color-white);
    text-transform: none;
    letter-spacing: 0;
    margin: 1.5rem 0 0;

    :hover {
        color: var(--color-white);
    }
`

export const MapillaryContainer = styled.div`
    position: relative;
    z-index: 1;
`