import styled from 'styled-components/macro'

export const NavBarContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 0.8rem;
    //position: fixed;
    height: 6vh;
    width: 100%;
`

export const ButtonContainer = styled.div`
    outline: 2px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

/* export const Title = styled.button`
border: none;
background: var(--color-primary);
color: var(--color-white);
font-family: var(--font-primary);
font-size: 1.2rem;
cursor: pointer;
`

export const AboutButton = styled(Title)`
font-size: 1rem;
text-transform: uppercase;
letter-spacing: 0.1rem;
` */

export const StyledButton = styled.button`
    border: none;
    background: var(--color-primary);
    cursor: pointer;
`

export const StyledImage = styled.img`
    display: flex;
    align-items: center;
`