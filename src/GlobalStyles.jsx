import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const OuterWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InnerWrapper = styled.section`
    width: 85vw;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 40vw;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Heading = styled.h1`
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-weight: 400;
    text-align: center;
    font-size: 6rem;
`

export const Subheading = styled.h2`
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.9rem;

    /* @media (max-width: 767.98px) {
        font-size: 1.3rem;
        line-height: 1.4rem;
    } */
`

export const Span = styled.h3`
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

export const Paragraph = styled.p`
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-weight: 400;
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
`

export const PrimaryButton = styled.button`
    color: var(--color-white);
    background-color: var(--color-primary);
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 1.2rem;
    margin: 1rem 0 0;
    padding: 0.6rem 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-style: none;
    border-radius: 50px;

    :hover {
        color: var(--color-white);
        transform: scale(1.1);
    }

    @media (max-width: 767.98px) {
        /* margin: 0.5 0 0; */
    }
`

export default GlobalStyles;