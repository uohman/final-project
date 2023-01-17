import styled from 'styled-components/macro'

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 0.8rem;
    height: 6vh;
    width: 100%;
`

export const ButtonContainer = styled.div`
    outline: 2px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledButton = styled.button`
    border: none;
    background: var(--color-primary);
    cursor: pointer;
`

export const StyledImage = styled.img`
    display: flex;
    align-items: center;
    height: 3.5vh;
`