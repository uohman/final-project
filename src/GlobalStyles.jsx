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
    font-family: var(--font-main);
    font-weight: 400;
    text-align: center;
    font-size: 5.5rem;
`

export const Subheading = styled.h1`
    font-family: var(--font-main);
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
`

export const UppercaseSubheading = styled.h1`
    font-family: var(--font-main);
    font-weight: 400;
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

export const Paragraph = styled.p`
    font-family: var(--font-main);
    font-weight: 400;
    text-align: left;
    font-size: 1rem;
    line-height: 1rem;
    // padding: 10px 0;    
`

export const PrimaryButton = styled.button`
    color: var(--color-white);
    background-color: var(--color-black);
    font-family: var(--font-main);
    font-size: 1rem;
    margin: 1.5rem;
    padding: 0.75rem 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-style: none;
    border-radius: 50px;
    /* width: 400px; */

    :hover {
        // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.20), 0 6px 20px 0 rgba(0, 0, 0, 0.20);
        color: var(--color-white);
        transform: scale(1.1);
    }
`

export default GlobalStyles;